import { type ReactElement, type ReactNode } from 'react'
import './ReachCard.pcss'
import { Tag } from '@concero/ui-kit'
import { Text } from '../Text/Text'

type ReachCardProps = {
	title: string
	subtitle?: string
	ImageNode?: ReactNode
	href?: string
	metaTitle?: string
	tags?: string[]
	ActionNode?: ReactNode
	isSoon?: boolean
	onClick?: () => void
}

export const ReachCard = (props: ReachCardProps): ReactElement => {
	const { title, subtitle, href, onClick, ImageNode, metaTitle, tags, ActionNode, isSoon } = props
	const ariaLabel = subtitle ? `${title} - ${subtitle}` : title
	const CardTag = href ? 'a' : onClick ? 'button' : 'div'
	const isInteractive = Boolean(href || onClick)

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
				<div className="reach_card_header_heading">
					<Text variant="body_large" className="reach_card_header_meta_title">
						{metaTitle}
					</Text>
					<div className="reach_card_header_meta_tags">
						{tags?.map(text => (
							<Tag size="m" variant="neutral">
								{text}
							</Tag>
						))}
					</div>
					<div>
						<div className="react_card_title_wrap">
							<span className="reach_card_title">{title}</span>
							{isSoon && (
								<Tag size="m" variant="warning">
									Soon
								</Tag>
							)}
						</div>
						{subtitle && <span className="reach_card_subtitle">{subtitle}</span>}
					</div>
				</div>
				<div>{ActionNode}</div>
			</div>
			<div className="reach_card_visual">{ImageNode}</div>
		</CardTag>
	)
}
