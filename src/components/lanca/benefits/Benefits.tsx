import type { FC, ReactElement } from 'react'
import { BenefitCard } from '@/components/common/BenefitCard/BenefitCard'
import { DistributionIcon } from '@/assets/icons/distribution'
import { ReachIcon } from '@/assets/icons/reach'
import { UserIcon } from '@/assets/icons/user'
import { StarIcon } from '@/assets/icons/star'
import './Benefits.pcss'

const BENEFIT_CARDS_ROWS = [
	[
		{
			title: 'Cost effective',
			description: 'Most efficient bridge for 60% of cross-chain transactions ',
			icon: <StarIcon />,
		},
		{
			title: 'Capital Efficient',
			description: 'Liquidity reused every 10 min',
			icon: <ReachIcon />,
		},
		{
			title: 'Scalable',
			description: 'Quick deployment to new chains',
			icon: <DistributionIcon />,
		},
		{
			title: 'Decentralised execution',
			description: 'No interaction with a centralised party when executing a transaction',
			icon: <UserIcon />,
		},
	],
]

export const Benefits: FC = (): ReactElement => (
	<div className="lanca_benefits">
		{BENEFIT_CARDS_ROWS.map((row, rowIndex) => (
			<div key={rowIndex} className="lanca_benefits_cards">
				{row.map((card, cardIndex) => (
					<BenefitCard key={cardIndex} {...card} />
				))}
			</div>
		))}
	</div>
)
