import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import { ArrowRightIcon } from '@/assets/icons/arrowRight'
import './ProductReachCard.pcss'

type ProductReachCardProps = {
	title: string
	description?: string
	img?: string
	buttonText: string
	buttonHref?: string
	onButtonClick?: () => void
}

export const ProductReachCard: FC<ProductReachCardProps> = ({
	title,
	description,
	buttonText,
	buttonHref,
	onButtonClick,
}): ReactElement => {
	const btnClick = (e: React.MouseEvent) => {
		if (buttonHref) {
			window.open(buttonHref, '_blank', 'noopener,noreferrer')
		} else if (onButtonClick) {
			onButtonClick()
		}
	}

	return (
		<div className="product_reach_card">
			<div className="product_reach_card_header">
				<span className="product_reach_card_title">{title}</span>
				{description && (
					<div className="product_reach_card_detail">
						<span className="product_reach_card_bullet" aria-hidden="true" />
						<span className="product_reach_card_text">{description}</span>
					</div>
				)}
			</div>
			<div className="product_reach_card_action">
				<Button
					variant="secondary"
					size="l"
					onClick={btnClick}
					trailIcon={{ show: true, icon: <ArrowRightIcon /> }}
					className="product_reach_card_action_button"
				>
					{buttonText}
				</Button>
			</div>
			<div className="product_reach_card_visual">{/* TODO Add visuals here */}</div>
		</div>
	)
}
