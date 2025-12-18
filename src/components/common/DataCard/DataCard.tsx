import type { ReactElement } from 'react'
import './DataCard.pcss'

type DataCardProps = {
	title: string
	number: string
	isAccent?: boolean
}

export const DataCard = ({ title, number, isAccent }: DataCardProps): ReactElement => {
	return (
		<div className={`data_card data_card`}>
			<span className={`data_card_title`}>{title}</span>
			<span className={`data_card_number data_card_number${isAccent ? '_accent' : ''}`}>{number}</span>
		</div>
	)
}
