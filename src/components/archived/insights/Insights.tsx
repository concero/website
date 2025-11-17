import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { InsightCard } from '@/components/common/InsightCard/InsightCard'
import { DataWidget } from '@/components/common/DataWidget/DataWidget'
import { ChainsIcon } from '@/assets/icons/chains'
import { ChainIntegrationsIcon } from '@/assets/icons/chainIntegrations'
import { IntegrationCostIcon } from '@/assets/icons/integrationCost'
import { TransactionsIcon } from '@/assets/icons/transactions'
import { WalletsIcon } from '@/assets/icons/wallets'
import './Insights.pcss'

enum InsightType {
	CARD = 'card',
	WIDGET = 'widget',
}

type CardData = {
	title: string
	img: string
}

type WidgetData = {
	title: string
	data: string
	icon: ReactElement
}

type SectionData = {
	title: string
	type: InsightType
	columns: (WidgetData | CardData)[][]
}

const INSIGHTS_DATA: readonly SectionData[] = [
	{
		title: 'Partners',
		type: InsightType.CARD,
		columns: [
			[
				{ title: 'Chainlink', img: '/Insights/Chainlink.webp' },
				{ title: 'Symbiotic', img: '/Insights/Symbiotic.webp' },
			],
			[
				{ title: 'Biconomy', img: '/Insights/Biconomy.webp' },
				{ title: 'Unichain ecosystem', img: '/Insights/Unichain.webp' },
			],
		],
	},
	{
		title: 'Grants',
		type: InsightType.CARD,
		columns: [
			[
				{ title: 'Arbitrum Grant', img: '/Insights/Arbitrum.webp' },
				{ title: 'Uniswap Grant', img: '/Insights/Uniswap.webp' },
			],
			[
				{ title: 'Aave Grant', img: '/Insights/Aave.webp' },
				{ title: 'Circle Grant', img: '/Insights/Circle.webp' },
			],
		],
	},
	{
		title: 'Numbers',
		type: InsightType.WIDGET,
		columns: [
			[
				{ title: 'Chains', data: '500+', icon: <ChainsIcon /> },
				{ title: 'Chain integration time', data: '<30 min', icon: <ChainIntegrationsIcon /> },
				{ title: 'Integration cost', data: 'Free', icon: <IntegrationCostIcon /> },
			],
			[
				{ title: 'Transactions', data: '2M +', icon: <TransactionsIcon /> },
				{ title: 'Wallets', data: '250k', icon: <WalletsIcon /> },
			],
		],
	},
] as const

export const Insights: FC = memo((): ReactElement => {
	return (
		<section className="insights">
			<div className="insights_content">
				{INSIGHTS_DATA.slice(0, 2).map(section => (
					<div key={section.title} className="insights_info">
						<h3 className="insights_title">{section.title}</h3>
						<div className="insights_container">
							{section.columns.map((column, columnIndex) => (
								<div key={`${section.title}-${columnIndex}`} className="insights_column">
									{column.map(item => (
										<InsightCard key={item.title} title={item.title} img={(item as CardData).img} />
									))}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="insights_info">
				<h3 className="insights_title">{INSIGHTS_DATA[2].title}</h3>
				<div className="insights_data_container">
					{INSIGHTS_DATA[2].columns.map((column, columnIndex) => (
						<div key={`numbers-${columnIndex}`} className="insights_data_column">
							{column.map(item => {
								const widget = item as WidgetData
								return (
									<DataWidget
										key={widget.title}
										title={widget.title}
										data={widget.data}
										icon={widget.icon}
									/>
								)
							})}
						</div>
					))}
				</div>
			</div>
		</section>
	)
})
