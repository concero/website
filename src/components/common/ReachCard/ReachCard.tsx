import type { FC, ReactElement } from 'react'
import './ReachCard.pcss'

type ReachCardProps = {
    title: string
    subtitle?: string
    description?: string
    img?: string
    href?: string
    onClick?: () => void
}

export const ReachCard: FC<ReachCardProps> = ({
    title,
    subtitle,
    description,
    href,
    onClick,
}): ReactElement => {
    const ariaLabel = subtitle ? `${title} - ${subtitle}` : title
    const CardTag = href ? 'a' : onClick ? 'button' : 'div'
    const isInteractive = Boolean(href || onClick)

    console.log(isInteractive)

    const cardProps = {
        className: `reach_card${href ? ' reach_card_link' : onClick ? ' reach_card_button' : ''}`,
        ...(href && {
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
        }),
        ...(onClick && {
            onClick,
            type: 'button' as const,
        }),
        ...(isInteractive && { 'aria-label': ariaLabel }),
    }

    return (
        <CardTag {...cardProps}>
            <div className="reach_card_header">
                <span className="reach_card_title">{title}</span>
                {subtitle && <span className="reach_card_subtitle">{subtitle}</span>}
            </div>
            {description && (
                <div className="reach_card_detail">
                    <span className="reach_card_bullet" aria-hidden="true" />
                    <span className="reach_card_text">{description}</span>
                </div>
            )}
            <div className="reach_card_visual">{/* TODO Add visuals here */}</div>
        </CardTag>
    )
}
