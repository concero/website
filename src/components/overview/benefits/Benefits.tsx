import type { FC, ReactElement } from 'react'
import { BenefitCard } from '@/components/common/BenefitCard/BenefitCard'
import { DistributionIcon } from '@/assets/icons/distribution'
import { InfinityIcon } from '@/assets/icons/infinity'
import { ReachIcon } from '@/assets/icons/reach'
import { UserIcon } from '@/assets/icons/user'
import { StarIcon } from '@/assets/icons/star'
import cls from './Benefits.module.pcss'
import { SettingsIcon } from '@/assets/icons/settings'
import { ConsistencyIcon } from '@/assets/icons/consistency'
import { LockIcon } from '@/assets/icons/lock'

const BENEFIT_CARDS_ROWS = [
	[
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
			icon: <UserIcon />,
		},
		{
			title: 'Infinite Reach',
			description: 'Reach any user no matter the chain',
			icon: <ReachIcon />,
		},
	],
	[
		{
			title: 'Optimise for you and your users',
			description: 'Define your interoperability stack according to your demands',
			icon: <SettingsIcon />,
		},
		{
			title: 'Infinitely upgradable',
			description: 'Integrate once and upgrade to the latest easily',
			icon: <InfinityIcon />,
		},
		{
			title: 'Self-Servicing',
			description: 'Quickly deploy your own modules to gain as much control as you need',
			icon: <ConsistencyIcon />,
		},
		{
			title: 'Trustless',
			description: 'No one party has control of your transaction',
			icon: <LockIcon />,
		},
	],
]

export const Benefits: FC = (): ReactElement => (
	<div className={cls.root}>
		{BENEFIT_CARDS_ROWS.map((row, rowIndex) => (
			<div key={rowIndex} className={cls.cards}>
				{row.map((card, cardIndex) => (
					<BenefitCard key={cardIndex} {...card} />
				))}
			</div>
		))}
	</div>
)
