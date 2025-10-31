import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import './InsightCard.pcss'

type InsightCardProps = {
	title: string
	img: string
}

export const InsightCard: FC<InsightCardProps> = memo(({ title, img }): ReactElement => {
	return (
		<div className="insight_card">
			<div className="insight_card_content">
				<img src={img} alt={title} loading="lazy" className="insight_icon" />
				<span className="insight_title">{title}</span>
			</div>
			<div className="insight_divider" />
		</div>
	)
})
