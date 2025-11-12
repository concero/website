import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import { ArrowRightIcon } from '@/assets/icons/arrowRight'
import './BuildCard.pcss'

type BuildCardProps = {
	title: string
	bullets: string[]
	url: string
	buttonText?: string
}

export const BuildCard: FC<BuildCardProps> = ({ title, bullets, url, buttonText = 'Get Started' }): ReactElement => {
	const handleClick = () => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<div className="build_card">
			<div className="build_card_visual">{/* TODO Add visual here */}</div>
			<div className="build_card_content">
				<div className="build_card_description">
					<span className="build_card_title">{title}</span>
					<div className="build_card_bullets">
						{bullets.map((bullet, index) => (
							<div key={index} className="build_card_bullet_item">
								<span className="build_card_bullet" aria-hidden="true" />
								<span className="build_card_text">{bullet}</span>
							</div>
						))}
					</div>
				</div>
				<Button
					variant="secondary"
					size="l"
					className="build_card_action"
					onClick={handleClick}
					trailIcon={{ show: true, icon: <ArrowRightIcon /> }}
				>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}
