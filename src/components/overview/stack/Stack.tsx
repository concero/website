import type { FC } from 'react'
import { memo, useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CodeBlock } from '@/components/common/CodeBlock/CodeBlock'
import { StackCard } from '@/components/common/StackCard/StackCard'
import './Stack.pcss'

type Keyword = {
	word: string
	duration: number
}

const keywords: readonly Keyword[] = [
	{ word: 'Speed', duration: 4000 },
	{ word: 'Security', duration: 4000 },
	{ word: 'Cost', duration: 4000 },
	{ word: 'Compliance', duration: 6000 },
	{ word: 'Deliverability', duration: 6000 },
	{ word: 'Sovereignty', duration: 4000 },
] as const

const FADE_DURATION_MS = 400

const animationVariants = {
	initial: { opacity: 0, y: -5 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -5 },
} as const

const animationTransition = {
	duration: FADE_DURATION_MS / 1000,
	ease: 'easeInOut',
} as const

type StackCardData = {
	title: string
	number: string
	isDark: boolean
}

const STACK_CARDS: readonly StackCardData[][] = [
	[
		{ title: 'Setup', number: 'Speed', isDark: true },
		{ title: 'Speed', number: '3sec', isDark: false },
		{ title: 'Cost', number: '$0.01', isDark: false },
		{ title: 'Security', number: 'Medium', isDark: false },
	],
	[
		{ title: 'Setup', number: 'Security', isDark: true },
		{ title: 'Speed', number: '20sec', isDark: false },
		{ title: 'Cost', number: '$0.05', isDark: false },
		{ title: 'Security', number: 'High', isDark: false },
	],
	[
		{ title: 'Setup', number: 'Cost', isDark: true },
		{ title: 'Speed', number: '10sec', isDark: false },
		{ title: 'Cost', number: '$0.01', isDark: false },
		{ title: 'Security', number: 'Medium', isDark: false },
	],
	[
		{ title: 'Setup', number: 'Compliance', isDark: true },
		{ title: 'Speed', number: '20sec', isDark: false },
		{ title: 'Cost', number: '$0.02', isDark: false },
		{ title: 'Security', number: 'Medium', isDark: false },
	],
	[
		{ title: 'Setup', number: 'Deliverability', isDark: true },
		{ title: 'Speed', number: '10sec', isDark: false },
		{ title: 'Cost', number: '$0.01', isDark: false },
		{ title: 'Security', number: 'Medium', isDark: false },
	],
	[
		{ title: 'Setup', number: 'Sovereignty', isDark: true },
		{ title: 'Speed', number: '10sec', isDark: false },
		{ title: 'Cost', number: '$0.01', isDark: false },
		{ title: 'Security', number: 'High', isDark: false },
	],
]

type AnimatedStackCardProps = StackCardData & {
	currentIndex: number
}

const AnimatedStackCard: FC<AnimatedStackCardProps> = memo(({ title, number, isDark, currentIndex }) => (
	<StackCard
		title={title}
		number={
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={`${title}-${currentIndex}`}
					variants={animationVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={animationTransition}
				>
					{number}
				</motion.span>
			</AnimatePresence>
		}
		isDark={isDark}
	/>
))

export const Stack: FC = memo(() => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const timeoutId = useRef<number | null>(null)

	useEffect(() => {
		const duration = keywords[currentIndex].duration
		timeoutId.current = window.setTimeout(() => {
			setCurrentIndex(prev => (prev + 1) % keywords.length)
		}, duration)
		return () => {
			if (timeoutId.current !== null) {
				clearTimeout(timeoutId.current)
			}
		}
	}, [currentIndex])

	const cards = STACK_CARDS[currentIndex]

	return (
		<div className="overview_stack">
			<div className="overview_stack_description">
				<span className="overview_stack_title">Define your own stack</span>
				<span className="overview_stack_subtitle">
					Define your purpose-built interoperability stack within every transaction
				</span>
			</div>
			<div className="overview_stack_content">
				<div className="overview_stack_cards">
					{cards.map(({ title, number, isDark }) => (
						<AnimatedStackCard
							key={title}
							title={title}
							number={number}
							isDark={isDark}
							currentIndex={currentIndex}
						/>
					))}
				</div>
				<CodeBlock currentIndex={currentIndex} />
			</div>
		</div>
	)
})
