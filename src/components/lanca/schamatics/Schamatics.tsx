import type { FC, ReactElement } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SchematicStep } from '@/components/common/SchematicStep/SchematicStep'
import './Schematics.pcss'
import { useWidthScreen } from '@/hooks/useWidthScreen'

type Step = { step: number; title: string; description: string }

const STEPS: readonly Step[] = [
	{
		step: 1,
		title: 'Start',
		description: 'Liquidity provider deposits funds and target balances are updated on child pools.',
	},
	{
		step: 2,
		title: 'Depositing',
		description: 'Rebalancers fill deficits on child chains and redeem their IOUs from surplus on master chain.',
	},
	{
		step: 3,
		title: 'Rebalancing',
		description: 'User deposits $500 into Chain A pool and $500 is released to them from Chain B pool.',
	},
	{
		step: 4,
		title: 'Tx Execution',
		description: 'User deposits $500 into Chain A pool and $500 is released to them from Chain B pool.',
	},
	{
		step: 5,
		title: 'Tx Settlement',
		description: 'Rebalancers fill deficits on Chain B pool and redeems their IOUs from Chain A pool.',
	},
] as const

const STEP_DURATION = 9500
const TRANSITION_DELAY = 500
const UPDATE_INTERVAL = 50

export const Schematics: FC = (): ReactElement => {
	const [stepIndex, setStepIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const [isOverflowing, setOverflowing] = useState(false)

	const isTablet = useWidthScreen('tablet', 'only')
	const isMobile = useWidthScreen('mobile', 'only')
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

	const checkOverflow = useCallback(() => {
		if (cardsRef.current) {
			setOverflowing(cardsRef.current.scrollWidth > cardsRef.current.clientWidth)
		}
	}, [])

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

	const imgBasePath = isShortMode ? '/Lanca/Schematics/Mobile' : '/Lanca/Schematics/Desktop'

	return (
		<div className="lanca_schematics">
			<div className="lanca_schematics_description">
				<h2 className="lanca_schematics_title">Lanca Liquidity Protocol</h2>
			</div>
			<div className="lanca_schematics_visual_wrapper">
				<div className="lanca_schematics_image_container">
					<AnimatePresence mode="wait">
						<motion.img
							key={`step-image-${stepIndex}`}
							src={`${imgBasePath}/Step${STEPS[stepIndex].step}.png`}
							alt={`Step ${STEPS[stepIndex].step}: ${STEPS[stepIndex].title}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="lanca_schematics_image"
							draggable={false}
						/>
					</AnimatePresence>
				</div>
				<div className={`lanca_schematics_cards_outer${isOverflowing ? ' lanca_overflow_shadow' : ''}`}>
					<div className="lanca_schematics_cards_wrapper" onScroll={onScroll}>
						<div className="lanca_schematics_cards" ref={cardsRef}>
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
