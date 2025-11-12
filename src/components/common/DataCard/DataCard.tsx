import type { FC, ReactElement } from 'react'
import './DataCard.pcss'

type DataCardProps = {
	title: string
	number: string
	isDark?: boolean
}

export const DataCard: FC<DataCardProps> = ({ title, number, isDark = false }): ReactElement => {
	const theme = isDark ? 'dark' : 'light'

	return (
		<div className={`data_card data_card_${theme}`}>
			<div className="data_card_content">
				<span className={`data_card_title data_card_title_${theme}`}>{title}</span>
				<span className={`data_card_number data_card_number_${theme}`}>{number}</span>
			</div>
		</div>
	)
}
