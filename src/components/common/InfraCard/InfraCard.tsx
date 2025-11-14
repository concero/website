import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './InfraCard.pcss'

type InfraCardProps = {
	title: string
	img?: string
}

export const InfraCard: FC<InfraCardProps> = ({ title, img }): ReactElement => {
	return (
		<div className="infra_card">
			<div className="infra_card_visual">{/* TODO Add visual here */}</div>
			<div className="infra_card_content">
				<span className="infra_card_title">{title}</span>
				<Button variant="secondary" size="l" className="infra_card_action">
					Docs
				</Button>
			</div>
		</div>
	)
}
