import type { FC, ReactElement } from 'react'
import { memo, useMemo } from 'react'
import { Tag } from '@concero/ui-kit'
import { AnimatePresence, motion } from 'framer-motion'
import { useWordAnimation } from '@/hooks/useWordAnimation'
import { CodeBlock } from '../common/CodeBlock/CodeBlock'
import { SpeedIcon } from '@/assets/icons/speed'
import { WalletsIcon } from '@/assets/icons/wallets'
import { SecurityIcon } from '@/assets/icons/security'
import './Setup.pcss'

const keywords = [
    { word: 'Speed', duration: 4000 },
    { word: 'Security', duration: 4000 },
    { word: 'Cost', duration: 4000 },
    { word: 'Compliance', duration: 6000 },
    { word: 'Deliverability', duration: 6000 },
    { word: 'Sovereignty', duration: 4000 },
] as const

const ANIMATION_TRANSITION = {
    duration: 0.2,
    ease: 'linear',
} as const

const wordVariants = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
} as const

type DetailValue = {
    value: string
    indicator?: string
    indicatorPosition?: 'before' | 'after'
}

type DetailConfig = {
    icon: FC
    title: string
    values: readonly DetailValue[]
}

const SETUP_DETAILS: readonly DetailConfig[] = [
    {
        icon: SpeedIcon,
        title: 'Speed',
        values: [
            { value: '3', indicator: 'sec', indicatorPosition: 'after' },
            { value: '20', indicator: 'sec', indicatorPosition: 'after' },
            { value: '10', indicator: 'sec', indicatorPosition: 'after' },
            { value: '20', indicator: 'sec', indicatorPosition: 'after' },
            { value: '10', indicator: 'sec', indicatorPosition: 'after' },
            { value: '10', indicator: 'sec', indicatorPosition: 'after' },
        ],
    },
    {
        icon: WalletsIcon,
        title: 'Cost',
        values: [
            { value: '0.015', indicator: '$', indicatorPosition: 'before' },
            { value: '0.05', indicator: '$', indicatorPosition: 'before' },
            { value: '0.01', indicator: '$', indicatorPosition: 'before' },
            { value: '0.02', indicator: '$', indicatorPosition: 'before' },
            { value: '0.01', indicator: '$', indicatorPosition: 'before' },
            { value: '0.01', indicator: '$', indicatorPosition: 'before' },
        ],
    },
    {
        icon: SecurityIcon,
        title: 'Security',
        values: [
            { value: 'Medium' },
            { value: 'High' },
            { value: 'Medium' },
            { value: 'Medium' },
            { value: 'Medium' },
            { value: 'High' },
        ],
    },
] as const

const SetupDetail = memo<{
    Icon: FC
    title: string
    value: string
    indicator?: string
    indicatorPosition?: 'before' | 'after'
    currentIndex: number
}>(({ Icon, title, value, indicator, indicatorPosition, currentIndex }) => (
    <div className="setup_detail">
        <div className="setup_detail_description">
            <div className="setup_detail_icon">
                <Icon />
            </div>
            <span className="setup_detail_title">{title}</span>
        </div>
        <div className="setup_detail_value">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={currentIndex}
                    variants={wordVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={ANIMATION_TRANSITION}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                    {indicatorPosition === 'before' && indicator && (
                        <span className="setup_detail_value_indicator">{indicator}</span>
                    )}
                    <span>{value}</span>
                    {indicatorPosition === 'after' && indicator && (
                        <span className="setup_detail_value_indicator">{indicator}</span>
                    )}
                </motion.span>
            </AnimatePresence>
        </div>
    </div>
))


export const Setup: FC = memo((): ReactElement => {
    const { currentWord, currentIndex } = useWordAnimation({
        words: keywords,
        fadeDuration: 300,
        autoStart: true,
        loop: true,
    })

    const details = useMemo(
        () =>
            SETUP_DETAILS.flatMap((detail, index) => {
                const currentValue = detail.values[currentIndex]
                const elements = [
                    <SetupDetail
                        key={detail.title}
                        Icon={detail.icon}
                        title={detail.title}
                        value={currentValue.value}
                        indicator={currentValue.indicator}
                        indicatorPosition={currentValue.indicatorPosition}
                        currentIndex={currentIndex}
                    />,
                ]
                if (index < SETUP_DETAILS.length - 1) {
                    elements.push(<div key={`divider-${index}`} className="setup_divider" />)
                }
                return elements
            }),
        [currentIndex]
    )

    return (
        <section className="setup">
            <div className="setup_content">
                <Tag variant="neutral" size="m">
                    Interoperability According to You
                </Tag>
                <div className="setup_description">
                    <h2 className="setup_title">
                        Optimise your stack for{' '}
                        <span className="setup_keyword_wrapper">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={currentIndex}
                                    className="setup_keyword"
                                    variants={wordVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={ANIMATION_TRANSITION}
                                >
                                    {currentWord}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h2>
                    <p className="setup_subtitle">
                        Configure your setup to fit your needs in seconds by adjusting just a few
                        variables.
                    </p>
                </div>
            </div>
            <div className="setup_info">
                <div className="setup_details">{details}</div>
                <CodeBlock currentIndex={currentIndex} />
            </div>
        </section>
    )
})
