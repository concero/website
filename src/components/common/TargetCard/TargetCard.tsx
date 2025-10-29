import type { FC, ReactNode } from 'react'
import { Tag } from '@concero/ui-kit'
import './TargetCard.pcss'

type TargetCardProps = {
	title: string
	subtitle: string
	icon: ReactNode
	tags: string[]
	visual: ReactNode
}

export const TargetCard: FC<TargetCardProps> = ({ title, subtitle, icon, tags, visual }) => {
	const widgets = []

	for (let i = 0; i < tags.length; i += 2) {
		widgets.push(tags.slice(i, i + 2))
	}

	return (
		<div className="target_card">
			<div className="target_card_info">
				<div className="target_card_icon">{icon}</div>
				<div className="target_card_description">
					<span className="target_card_title">{title}</span>
					<span className="target_card_subtitle">{subtitle}</span>
				</div>
				<div className="target_card_tags">
					{widgets.map((row, rowIndex) => (
						<div key={rowIndex} className="target_card_tags_row">
							{row.map(tag => (
								<div key={tag} className="target_card_tag_wrapper">
									<Tag variant="branded" size="m">
										{tag}
									</Tag>
								</div>
							))}
						</div>
					))}
				</div>
				<div className="target_card_visual">{visual}</div>
			</div>
		</div>
	)
}
