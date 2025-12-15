import type { ReactElement } from 'react'
import './DataCard.pcss'
import { Text } from '../Text/Text'

type DataCardProps = {
	title: string
	number: string
	isAccent?: boolean
}

export const DataCard = ({ title, number, isAccent }: DataCardProps): ReactElement => {
	return (
		<div className={`data_card data_card`}>
			<Text variant="body_xlarge" className={`data_card_title`}>
				{title}
			</Text>
			<span className={`data_card_number data_card_number${isAccent ? '_accent' : ''}`}>{number}</span>
		</div>
	)
}
