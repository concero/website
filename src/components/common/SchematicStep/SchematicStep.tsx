import type { FC, ReactElement } from 'react'
import { useState } from 'react'
import { Tag } from '@concero/ui-kit'
import { AnimatePresence, motion } from 'framer-motion'
import './SchematicStep.pcss'

type SchematicStepProps = {
    title: string
    description: string
    step: number
    isActive: boolean
    progress: number
    onClick?: () => void
}

export const SchematicStep: FC<SchematicStepProps> = ({
    title,
    description,
    step,
    isActive,
    progress,
    onClick,
}): ReactElement => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const containerClasses = [
        'schematic_step',
        isActive ? 'schematic_step_active' : '',
        isHovered ? 'schematic_step_hovered' : '',
    ].filter(Boolean).join(' ')

    const tagClasses = [
        'schematic_step_tag',
        !isHovered && !isActive ? 'schematic_step_tag_idle' : '',
    ].filter(Boolean).join(' ')

    const titleClasses = [
        'schematic_step_title',
        isHovered ? 'schematic_step_title_hovered' : '',
    ].filter(Boolean).join(' ')

    const descriptionClasses = [
        'schematic_step_description',
        isHovered ? 'schematic_step_description_hovered' : '',
    ].filter(Boolean).join(' ')

    return (
        <div
            className={containerClasses}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="schematic_step_indicator">
                <div
                    className="schematic_step_indicator_fill"
                    style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
            </div>
            <Tag variant="neutral" size="m" className={tagClasses}>
                Step {step}
            </Tag>
            <div className="schematic_step_content">
                <h3 className={titleClasses}>{title}</h3>
                <AnimatePresence>
                    {(isActive || isHovered) && (
                        <motion.p
                            key="description"
                            className={descriptionClasses}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            {description}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
