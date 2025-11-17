import type { FC, ReactElement } from 'react'
import { memo, useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CodeBlock } from '@/components/common/CodeBlock/CodeBlock'
import { StackCard } from '@/components/common/StackCard/StackCard'
import './Stack.pcss'

const keywords = [
    { word: 'Speed', duration: 4000 },
    { word: 'Security', duration: 4000 },
    { word: 'Cost', duration: 4000 },
    { word: 'Compliance', duration: 6000 },
    { word: 'Deliverability', duration: 6000 },
    { word: 'Sovereignty', duration: 4000 },
] as const

const FADE_DURATION = 400

const wordVariants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
}

const ANIMATION_TRANSITION = {
    duration: FADE_DURATION / 1000,
    ease: 'easeInOut',
} as const

type StackCardData = {
    title: string
    number: string
    isDark: boolean
}

const STACK_CARDS_DATA: readonly StackCardData[][] = [
    [
        { title: 'Setup', number: 'Speed', isDark: true },
        { title: 'Speed', number: '3sec', isDark: false },
        { title: 'Cost', number: '$ 0.015', isDark: false },
        { title: 'Security', number: 'Medium', isDark: false },
    ],
    [
        { title: 'Setup', number: 'Security', isDark: true },
        { title: 'Speed', number: '20sec', isDark: false },
        { title: 'Cost', number: '$ 0.05', isDark: false },
        { title: 'Security', number: 'High', isDark: false },
    ],
    [
        { title: 'Setup', number: 'Cost', isDark: true },
        { title: 'Speed', number: '10sec', isDark: false },
        { title: 'Cost', number: '$ 0.01', isDark: false },
        { title: 'Security', number: 'Medium', isDark: false },
    ],
    [
        { title: 'Setup', number: 'Compliance', isDark: true },
        { title: 'Speed', number: '20sec', isDark: false },
        { title: 'Cost', number: '$ 0.02', isDark: false },
        { title: 'Security', number: 'Medium', isDark: false },
    ],
    [
        { title: 'Setup', number: 'Deliverability', isDark: true },
        { title: 'Speed', number: '10sec', isDark: false },
        { title: 'Cost', number: '$ 0.01', isDark: false },
        { title: 'Security', number: 'Medium', isDark: false },
    ],
    [
        { title: 'Setup', number: 'Sovereignty', isDark: true },
        { title: 'Speed', number: '10sec', isDark: false },
        { title: 'Cost', number: '$ 0.01', isDark: false },
        { title: 'Security', number: 'High', isDark: false },
    ],
] as const

const AnimatedStackCard = memo<StackCardData & { currentIndex: number }>(
    ({ title, number, isDark, currentIndex }) => (
        <StackCard
            title={title}
            number={
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={`${title}-${currentIndex}`}
                        variants={wordVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={ANIMATION_TRANSITION}
                    >
                        {number}
                    </motion.span>
                </AnimatePresence>
            }
            isDark={isDark}
        />
    )
)

export const Stack: FC = memo((): ReactElement => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        const currentDuration = keywords[currentIndex].duration

        timeoutRef.current = window.setTimeout(() => {
            setCurrentIndex(prev => (prev + 1) % keywords.length)
        }, currentDuration)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [currentIndex])

    const currentCards = STACK_CARDS_DATA[currentIndex]

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
                    {currentCards.map(card => (
                        <AnimatedStackCard
                            key={card.title}
                            title={card.title}
                            number={card.number}
                            isDark={card.isDark}
                            currentIndex={currentIndex}
                        />
                    ))}
                </div>
                <CodeBlock currentIndex={currentIndex} />
            </div>
        </div>
    )
})

