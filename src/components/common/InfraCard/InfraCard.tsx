import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import { ArrowRightIcon } from '@/assets/icons/arrowRight'
import './InfraCard.pcss'

type InfraCardProps = {
	title: string
	subtitle: string
	img?: string
}

export const InfraCard: FC<InfraCardProps> = ({ title, subtitle, img }): ReactElement => {
	return (
		<div className="infra_card">
			<div className="infra_card_visual">{/* TODO Add visual here */}</div>
			<div className="infra_card_content">
				<div className="infra_card_description">
					<span className="infra_card_title">{title}</span>
					<span className="infra_card_subtitle">{subtitle}</span>
				</div>
				<Button
					variant="secondary"
					size="l"
					className="infra_card_action"
					trailIcon={{ show: true, icon: <ArrowRightIcon /> }}
				>
					Docs
				</Button>
			</div>
		</div>
	)
}
