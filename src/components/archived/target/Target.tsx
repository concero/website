import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { TargetCard } from '../common/TargetCard/TargetCard'
import { TargetIcon } from '@/assets/icons/target'
import { BridgeIcon } from '@/assets/icons/bridge'
import { AssetVisual } from './AssetVisual/AssetVisual'
import { ProtocolVisual } from './ProtocolVisual/ProtocolVisual'
import { BenefitCard } from '../common/BenefitCard/BenefitCard'
import { Button } from '@concero/ui-kit'
import { StarIcon } from '@/assets/icons/star'
import { DistributionIcon } from '@/assets/icons/distribution'
import { OptimizeIcon } from '@/assets/icons/optimize'
import { TrustIcon } from '@/assets/icons/trust'
import { InfinityIcon } from '@/assets/icons/infinity'
import { ServicingIcon } from '@/assets/icons/servicing'
import { PermissionlessIcon } from '@/assets/icons/permissionless'
import { ReachIcon } from '@/assets/icons/reach'
import { useModalContext } from '@/reducer/modal/modalContext'
import { links } from '@/configuration/links'
import './Target.pcss'

const TARGET_CARDS = [
	{
		title: 'dApps & Protocols',
		subtitle: 'Let anyone interact with you',
		icon: <TargetIcon />,
		tags: ['Deploy once and reach any user', 'No ecosystem lock-ins', 'Optimise for you and your users'],
		visual: <ProtocolVisual />,
	},
	{
		title: 'Asset Issuers',
		subtitle: 'Unify liquidity and distribute to any user',
		icon: <BridgeIcon />,
		tags: ['Capital-efficient framework', 'Control over burn/mint rights', 'Enforce regulatory requirements'],
		visual: <AssetVisual />,
	},
]

const BENEFIT_CARDS_ROW_1 = [
	{
		title: 'No vendor-lock',
		description: 'Retain sovereignty and control with infrastructure that works for you',
		icon: <StarIcon />,
	},
	{
		title: 'Distribution-first',
		description: 'Scaling to new chains in under 30 minutes with no added cost',
		icon: <DistributionIcon />,
	},
	{
		title: 'Optimise for you and your users',
		description: 'Define your interoperability stack according to your demands',
		icon: <OptimizeIcon />,
	},
	{ title: 'Trustless', description: 'No one party has control of your transaction', icon: <TrustIcon /> },
]

const BENEFIT_CARDS_ROW_2 = [
	{
		title: 'Infinitely upgradable',
		description: 'Integrate once and upgrade to the latest easily',
		icon: <InfinityIcon />,
	},
	{
		title: 'Self-Servicing',
		description: 'Quickly deploy your own modules to gain as much control as you need',
		icon: <ServicingIcon />,
	},
	{
		title: 'Permissionless',
		description: 'Deploy Concero to where your users live to reach them quickly',
		icon: <PermissionlessIcon />,
	},
	{ title: 'Infinite Reach', description: 'Reach any user no matter the chain', icon: <ReachIcon /> },
]

export const Target: FC = memo((): ReactElement => {
	const { dispatch } = useModalContext()

	const handleIntegrate = () => {
		dispatch({ type: 'OPEN_CONTACT' })
	}

	const handleDocumentation = () => {
		window.open(links.documentation, '_blank', 'noopener,noreferrer')
	}

	return (
		<section className="target">
			<span className="target_title">Who do we serve</span>
			<div className="target_cards">
				{TARGET_CARDS.map((card, index) => (
					<TargetCard key={index} {...card} />
				))}
			</div>
			<div className="target_benefit_cards">
				{BENEFIT_CARDS_ROW_1.map((card, index) => (
					<BenefitCard key={index} {...card} />
				))}
			</div>
			<div className="target_benefit_cards">
				{BENEFIT_CARDS_ROW_2.map((card, index) => (
					<BenefitCard key={index} {...card} />
				))}
			</div>
			<div className="target_actions">
				<Button variant="secondary" size="xl" className="target_action_button" onClick={handleDocumentation}>
					Documentation
				</Button>
				<Button variant="primary" size="xl" className="target_action_button" onClick={handleIntegrate}>
					Integrate
				</Button>
			</div>
		</section>
	)
})
