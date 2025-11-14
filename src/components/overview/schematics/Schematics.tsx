import type { FC, ReactElement } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SchematicStep } from '@/components/common/SchematicStep/SchematicStep'
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

const STEP_DURATION = 9500
const TRANSITION_DELAY = 500
const UPDATE_INTERVAL = 50

export const Schematics: FC = (): ReactElement => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isOverflowing, setIsOverflowing] = useState(false)

  const intervalRef = useRef<number | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)
  const cardsRef = useRef<HTMLDivElement>(null)

  const clearTimers = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const startAnimation = useCallback((stepIndex: number) => {
    clearTimers()
    setCurrentStepIndex(stepIndex)
    setProgress(0)
    startTimeRef.current = Date.now()

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      setProgress(Math.min((elapsed / STEP_DURATION) * 100, 100))
    }, UPDATE_INTERVAL)

    timeoutRef.current = window.setTimeout(() => {
      clearTimers()
      setProgress(100)
      window.setTimeout(() => {
        startAnimation((stepIndex + 1) % STEPS.length)
      }, TRANSITION_DELAY)
    }, STEP_DURATION)
  }, [])

  const checkOverflow = useCallback(() => {
    if (cardsRef.current) {
      const el = cardsRef.current
      setIsOverflowing(el.scrollWidth > el.clientWidth)
    }
  }, [])

  useEffect(() => {
    startAnimation(0)
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => {
      clearTimers()
      window.removeEventListener('resize', checkOverflow)
    }
  }, [startAnimation, checkOverflow])

  const onScroll = useCallback(() => {
    if (!cardsRef.current) {
      setIsOverflowing(false)
      return
    }
    const el = cardsRef.current
    setIsOverflowing(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }, [])

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
              key={`step-image-${currentStepIndex}`}
              src={`/Schematics/Step${STEPS[currentStepIndex].step}.svg`}
              alt={`Step ${STEPS[currentStepIndex].step}: ${STEPS[currentStepIndex].title}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overview_schematics_image"
              draggable={false}
            />
          </AnimatePresence>
        </div>
        <div className={`overview_schematics_cards_outer${isOverflowing ? ' overflow-shadow' : ''}`}>
          <div
            className="overview_schematics_cards_wrapper"
            onScroll={onScroll}
          >
            <div className="overview_schematics_cards" ref={cardsRef}>
              {STEPS.map((step, index) => {
                const isActive = index === currentStepIndex
                return (
                  <SchematicStep
                    key={step.step}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    isActive={isActive}
                    progress={isActive ? progress : 0}
                    onClick={!isActive ? () => startAnimation(index) : undefined}
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
