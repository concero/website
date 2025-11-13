import type { FC, ReactElement } from 'react'
import { BenefitCard } from '@/components/common/BenefitCard/BenefitCard'
import { DistributionIcon } from '@/assets/icons/distribution'
import { OptimizeIcon } from '@/assets/icons/optimize'
import { InfinityIcon } from '@/assets/icons/infinity'
import { ServicingIcon } from '@/assets/icons/servicing'
import { ReachIcon } from '@/assets/icons/reach'
import { TrustIcon } from '@/assets/icons/trust'
import { UserIcon } from '@/assets/icons/user'
import { StarIcon } from '@/assets/icons/star'
import './Benefits.pcss'

const BENEFIT_CARDS_ROW_1 = [
	{
		title: 'No vendor-lock',
		description: 'Retain sovereignty and control with infrastructure that works for you',
		icon: <StarIcon />,
	},
	{
		title: 'Distribution-first',
		description: 'Scaling to new chains in under 20 minutes with no added cost',
		icon: <DistributionIcon />,
	},
	{
		title: 'Permissionless',
		description: 'Deploy Motherboard to where your users live',
		icon: <OptimizeIcon />,
	},
	{ title: 'Infinite Reach', description: 'Reach any user no matter the chain', icon: <TrustIcon /> },
]

const BENEFIT_CARDS_ROW_2 = [
	{
		title: 'Optimise for you and your users',
		description: 'Define your interoperability stack according to your demands',
		icon: <InfinityIcon />,
	},
	{
		title: 'Infinitely upgradable',
		description: 'Integrate once and upgrade to the latest easily',
		icon: <ServicingIcon />,
	},
	{
		title: 'Self-Servicing',
		description: 'Quickly deploy your own modules to gain as much control as you need',
		icon: <UserIcon />,
	},
	{ title: 'Trustless', description: 'No one party has control of your transaction', icon: <ReachIcon /> },
]

export const Benefits: FC = (): ReactElement => {
	return (
		<div className="overview_benefits">
			<div className="overview_benefits_cards">
				{BENEFIT_CARDS_ROW_1.map((card, index) => (
					<BenefitCard key={index} {...card} />
				))}
			</div>
			<div className="overview_benefits_cards">
				{BENEFIT_CARDS_ROW_2.map((card, index) => (
					<BenefitCard key={index} {...card} />
				))}
			</div>
		</div>
	)
}
