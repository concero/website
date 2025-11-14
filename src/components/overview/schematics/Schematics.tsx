import type { FC, ReactElement } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { SchematicStep } from '@/components/common/SchematicStep/SchematicStep'
import './Schematics.pcss'

type Step = {
	step: number
	title: string
	description: string
}

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
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
	const [progress, setProgress] = useState<number>(0)
	const intervalRef = useRef<number | null>(null)
	const timeoutRef = useRef<number | null>(null)
	const startTimeRef = useRef<number>(Date.now())

	const startAnimation = useCallback((stepIndex: number) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current)
		if (intervalRef.current) clearInterval(intervalRef.current)

		setCurrentStepIndex(stepIndex)
		setProgress(0)
		startTimeRef.current = Date.now()

		intervalRef.current = window.setInterval(() => {
			const elapsed = Date.now() - startTimeRef.current
			const newProgress = Math.min((elapsed / STEP_DURATION) * 100, 100)
			setProgress(newProgress)
		}, UPDATE_INTERVAL)

		timeoutRef.current = window.setTimeout(() => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
				intervalRef.current = null
			}
			setProgress(100)
			window.setTimeout(() => {
				startAnimation((stepIndex + 1) % STEPS.length)
			}, TRANSITION_DELAY)
		}, STEP_DURATION)
	}, [])

	useEffect(() => {
		startAnimation(currentStepIndex)

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
				timeoutRef.current = null
			}
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
				intervalRef.current = null
			}
		}
	}, [currentStepIndex, startAnimation])

	return (
		<div className="overview_schematics">
			<div className="overview_schematics_description">
				<h2 className="overview_schematics_title">Motherboard Schematics</h2>
				<p className="overview_schematics_subtitle">User-defined modules work together to propagate messages</p>
			</div>
			<div className="overview_schematics_cards">
				{STEPS.map((step, index) => {
					const isActive = index === currentStepIndex
					const stepProgress = isActive ? progress : 0

					return (
						<SchematicStep
							key={step.step}
							step={step.step}
							title={step.title}
							description={step.description}
							isActive={isActive}
							progress={stepProgress}
							onClick={!isActive ? () => startAnimation(index) : undefined}
						/>
					)
				})}
			</div>
		</div>
	)
}
