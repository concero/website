import type { ReactElement, ReactNode } from 'react'
import { Button } from '@concero/ui-kit'
import './BuildCard.pcss'

type BuildCardProps = {
	title: string
	bullets: string[]
	url: string
	buttonText?: string
	ImageNode?: ReactNode
	isInverse?: boolean
	isColumn?: boolean
}

export const BuildCard = ({
	title,
	bullets,
	url,
	buttonText = 'Get Started',
	ImageNode,
	isInverse,
	isColumn,
}: BuildCardProps): ReactElement => {
	const handleClick = () => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<div className={`build_card ${isInverse ? 'build_card_inverse' : ''} ${isColumn ? 'build_card_column' : ''}`}>
			<div className="build_card_visual">{ImageNode}</div>
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
				<Button variant="secondary" size="xl" onClick={handleClick}>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}
