import type { FC, ReactElement } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SchematicStep } from '@/components/common/SchematicStep/SchematicStep'
import { useIsTablet, useIsMobile } from '@/hooks/useMediaQuery'
import './Schematics.pcss'

type Step = {
  step: number
  title: string
  description: string
}

const STEPS: readonly Step[] = [
  { step: 1, title: 'Identify', description: 'Defined Validator network identifies a new transaction through RPC.' },
  { step: 2, title: 'Trigger', description: 'Validator network triggers defined Verifier network through an HTTP call.' },
  { step: 3, title: 'Verify', description: 'Verifier network queries the defined RPC and generates a proof for an event.' },
  { step: 4, title: 'Deliver', description: 'Validator network picks up the proof and writes it to the destination chain through the defined RPC.' },
  { step: 5, title: 'Validate', description: 'Destination chain router validates proof and message and emits an event.' },
] as const

const STEP_DURATION: number = 9500
const TRANSITION_DELAY: number = 500
const UPDATE_INTERVAL: number = 50

export const Schematics: FC = (): ReactElement => {
  const [current_step_index, set_current_step_index] = useState<number>(0)
  const [progress, set_progress] = useState<number>(0)
  const [is_overflowing, set_is_overflowing] = useState<boolean>(false)
  const isTablet: boolean = useIsTablet()
  const isMobile: boolean = useIsMobile()
  const isShortMode: boolean = isMobile || isTablet

  const interval_ref = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeout_ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const start_time_ref = useRef<number>(0)
  const cards_ref = useRef<HTMLDivElement>(null)

  const clear_timers = (): void => {
    if (interval_ref.current !== null) {
      clearInterval(interval_ref.current)
      interval_ref.current = null
    }
    if (timeout_ref.current !== null) {
      clearTimeout(timeout_ref.current)
      timeout_ref.current = null
    }
  }

  const start_animation = useCallback((step_index: number): void => {
    clear_timers()
    set_current_step_index(step_index)
    set_progress(0)
    start_time_ref.current = Date.now()

    interval_ref.current = setInterval(() => {
      const elapsed: number = Date.now() - start_time_ref.current
      set_progress(Math.min((elapsed / STEP_DURATION) * 100, 100))
    }, UPDATE_INTERVAL)

    timeout_ref.current = setTimeout(() => {
      clear_timers()
      set_progress(100)
      setTimeout(() => {
        start_animation((step_index + 1) % STEPS.length)
      }, TRANSITION_DELAY)
    }, STEP_DURATION)
  }, [])

  const check_overflow = useCallback((): void => {
    if (cards_ref.current) {
      const el: HTMLDivElement = cards_ref.current
      set_is_overflowing(el.scrollWidth > el.clientWidth)
    }
  }, [])

  useEffect(() => {
    start_animation(0)
    check_overflow()
    window.addEventListener('resize', check_overflow)
    return (): void => {
      clear_timers()
      window.removeEventListener('resize', check_overflow)
    }
  }, [start_animation, check_overflow])

  const on_scroll = useCallback((): void => {
    if (!cards_ref.current) {
      set_is_overflowing(false)
      return
    }
    const el: HTMLDivElement = cards_ref.current
    set_is_overflowing(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }, [])

  const image_base_path = isShortMode ? '/Schematics/Mobile' : '/Schematics/Desktop'

  return (
    <div className="overview_schematics">
      <div className="overview_schematics_description">
        <h2 className="overview_schematics_title">Motherboard Schematics</h2>
        <p className="overview_schematics_subtitle">User-defined modules work together to propagate messages</p>
      </div>
      <div className="overview_schematics_visual_wrapper">
        <div className="overview_schematics_image_container">
          <AnimatePresence mode="wait">
            <motion.img
              key={`step-image-${current_step_index}`}
              src={`${image_base_path}/Step${STEPS[current_step_index].step}.svg`}
              alt={`Step ${STEPS[current_step_index].step}: ${STEPS[current_step_index].title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overview_schematics_image"
              draggable={false}
            />
          </AnimatePresence>
        </div>
        <div className={`overview_schematics_cards_outer${is_overflowing ? ' overview_overflow_shadow' : ''}`}>
          <div className="overview_schematics_cards_wrapper" onScroll={on_scroll}>
            <div className="overview_schematics_cards" ref={cards_ref}>
              {STEPS.map((step: Step, index: number) => {
                const is_active: boolean = index === current_step_index
                return (
                  <SchematicStep
                    key={step.step}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    isActive={is_active}
                    progress={is_active ? progress : 0}
                    onClick={!is_active ? (): void => start_animation(index) : undefined}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
