import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './ProductReachCard.pcss'
import { useWidthScreen } from '@/hooks/useWidthScreen'

type ProductReachCardProps = {
	title: string
	description?: string
	ImageNode?: () => JSX.Element
	buttonText: string
	buttonHref?: string
	onButtonClick?: () => void
}

export const ProductReachCard: FC<ProductReachCardProps> = ({
	title,
	description,
	buttonText,
	buttonHref,
	ImageNode,
	onButtonClick,
}): ReactElement => {
	const isFullHd = useWidthScreen('fullHd', 'only')
	const btnClick = () => {
		if (buttonHref) {
			window.open(buttonHref, '_blank', 'noopener,noreferrer')
		} else if (onButtonClick) {
			onButtonClick()
		}
	}

	return (
		<div className="product_reach_card">
			<div className="product_reach_card_heading">
				<div className="product_reach_card_header">
					<span className="product_reach_card_title">{title}</span>
					{description && (
						<div className="product_reach_card_detail">
							<span className="product_reach_card_text">{description}</span>
						</div>
					)}
				</div>
				<div className="product_reach_card_action">
					<Button variant="secondary_color" size={isFullHd ? 'xl' : 'l'} onClick={btnClick}>
						{buttonText}
					</Button>
				</div>
			</div>
			<div className="product_reach_card_visual">{ImageNode?.()}</div>
		</div>
	)
}
