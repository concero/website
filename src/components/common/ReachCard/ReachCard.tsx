import type { FC, ReactElement } from 'react'
import './ReachCard.pcss'

type ReachCardProps = {
	title: string
	subtitle: string
	description?: string
	img?: string
	href?: string
	onClick?: () => void
}

export const ReachCard: FC<ReachCardProps> = ({ title, subtitle, description, href, onClick }): ReactElement => {
	const content = (
		<>
			<div className="reach_card_header">
				<span className="reach_card_title">{title}</span>
				<span className="reach_card_subtitle">{subtitle}</span>
			</div>
			{description && (
				<div className="reach_card_detail">
					<span className="reach_card_bullet" aria-hidden="true" />
					<span className="reach_card_text">{description}</span>
				</div>
			)}
			<div className="reach_card_visual">{/* TODO Add visuals here */}</div>
		</>
	)

	if (href) {
		return (
			<a
				href={href}
				className="reach_card reach_card_link"
				onClick={onClick}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${title} - ${subtitle}`}
			>
				{content}
			</a>
		)
	}

	if (onClick) {
		return (
			<button
				type="button"
				className="reach_card reach_card_button"
				onClick={onClick}
				aria-label={`${title} - ${subtitle}`}
			>
				{content}
			</button>
		)
	}

	return <div className="reach_card">{content}</div>
}
