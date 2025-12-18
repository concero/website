import type { FC, ReactElement } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SchematicStep } from '@/components/common/SchematicStep/SchematicStep'
import { useIsTablet, useIsMobile } from '@/hooks/useMediaQuery'
import './Schematics.pcss'

type Step = { step: number; title: string; description: string }

const STEPS: readonly Step[] = [
	{ step: 1, title: 'Identify', description: 'Defined Validator network identifies a new transaction through RPC.' },
	{
		step: 2,
		title: 'Trigger',
		description: 'Validator network triggers defined Verifier network through an HTTP call.',
	},
	{
		step: 3,
		title: 'Verify',
		description: 'Verifier network queries the defined RPC and generates a proof for an event.',
	},
	{
		step: 4,
		title: 'Deliver',
		description:
			'Validator network picks up the proof and writes it to the destination chain through the defined RPC.',
	},
	{
		step: 5,
		title: 'Validate',
		description: 'Destination chain router validates proof and message and emits an event.',
	},
] as const

const STEP_DURATION = 9500
const TRANSITION_DELAY = 500
const UPDATE_INTERVAL = 50

export const Schematics: FC = (): ReactElement => {
	const [stepIndex, setStepIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const [isOverflowing, setOverflowing] = useState(false)

	const isTablet = useIsTablet()
	const isMobile = useIsMobile()
	const isShortMode = isMobile || isTablet

	const intervalId = useRef<number | null>(null)
	const timeoutId = useRef<number | null>(null)
	const startTime = useRef<number>(0)
	const cardsRef = useRef<HTMLDivElement | null>(null)

	const clearTimers = useCallback(() => {
		if (intervalId.current !== null) {
			clearInterval(intervalId.current)
			intervalId.current = null
		}
		if (timeoutId.current !== null) {
			clearTimeout(timeoutId.current)
			timeoutId.current = null
		}
	}, [])

	const startAnimation = useCallback(
		(index: number) => {
			clearTimers()
			setStepIndex(index)
			setProgress(0)
			startTime.current = Date.now()
			intervalId.current = window.setInterval(() => {
				const elapsed = Date.now() - startTime.current
				setProgress(Math.min((elapsed / STEP_DURATION) * 100, 100))
			}, UPDATE_INTERVAL)
			timeoutId.current = window.setTimeout(() => {
				clearTimers()
				setProgress(100)
				window.setTimeout(() => startAnimation((index + 1) % STEPS.length), TRANSITION_DELAY)
			}, STEP_DURATION)
		},
		[clearTimers],
	)
	useEffect(() => {
		if (!isShortMode || !cardsRef.current) return

		const card = cardsRef.current.children[0] as HTMLElement | null
		if (!card) return

		const cardWidth = card.getBoundingClientRect().width
		const gapPX = stepIndex > 0 ? 32 : 0
		const translateX = (-cardWidth - gapPX) * stepIndex

		cardsRef.current.style.transform = `translateX(${translateX}px)`
		cardsRef.current.style.transition = 'transform 0.4s ease'
	}, [stepIndex, isShortMode])
	useEffect(() => {
		return () => {
			if (cardsRef.current) {
				cardsRef.current.style.transform = ''
				cardsRef.current.style.transition = ''
			}
		}
	}, [])
	const checkOverflow = useCallback(() => {
		if (cardsRef.current) {
			setOverflowing(cardsRef.current.scrollWidth > cardsRef.current.clientWidth)
		}
	}, [])

	useEffect(() => {
		startAnimation(0)
		checkOverflow()
		window.addEventListener('resize', checkOverflow, { passive: true })
		return () => {
			clearTimers()
			window.removeEventListener('resize', checkOverflow)
		}
	}, [startAnimation, checkOverflow, clearTimers])

	const onScroll = useCallback(() => {
		if (!cardsRef.current) {
			setOverflowing(false)
			return
		}
		const el = cardsRef.current
		setOverflowing(el.scrollLeft + el.clientWidth < el.scrollWidth)
	}, [])

	const imgBasePath = isShortMode ? '/Schematics/Overview/Mobile' : '/Schematics/Overview/Desktop'

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
							key={`step-image-${stepIndex}`}
							src={`${imgBasePath}/Step${STEPS[stepIndex].step}.svg`}
							alt={`Step ${STEPS[stepIndex].step}: ${STEPS[stepIndex].title}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="overview_schematics_image"
							draggable={false}
						/>
					</AnimatePresence>
				</div>
				<div className={`overview_schematics_cards_outer${isOverflowing ? ' overview_overflow_shadow' : ''}`}>
					<div className="overview_schematics_cards_wrapper" onScroll={onScroll}>
						<div className="overview_schematics_cards" ref={cardsRef}>
							{STEPS.map((step, index) => {
								const active = index === stepIndex
								return (
									<SchematicStep
										key={step.step}
										step={step.step}
										title={step.title}
										description={step.description}
										isActive={active}
										progress={active ? progress : 0}
										onClick={!active ? () => startAnimation(index) : undefined}
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
