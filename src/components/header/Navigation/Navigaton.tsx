import type { FC, ReactNode } from 'react'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { SwapIcon } from '@/assets/icons/swap'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import './Navigation.pcss'

type DropdownItemType = {
	link: string
	icon: ReactNode
	title: string
}

const developerDropdownItems: DropdownItemType[] = [
	{
		title: 'Whitepaper',
		link: '/developers/api',
		icon: <WhitepaperIcon />,
	},
	{
		title: 'Documentation',
		link: '/developers/sdks',
		icon: <DocumentationIcon />,
	}
]

const ecosystemDropdownItems: DropdownItemType[] = [
	{
		title: 'Provide Liquidity',
		link: '/ecosystem/partners',
		icon: <LiquidityIcon />,
	},
	{
		title: 'Rewards Portal',
		link: '/ecosystem/use-cases',
		icon: <RewardsIcon />,
	},
    {
		title: 'Swap & Bridge',
		link: '/developers/docs',
		icon: <SwapIcon />,
	}
]

export const Navigation: FC = (): JSX.Element => {
	return (
		<div className="header_nav_container">
			<div className="header_nav">
				<NavigationItem title="For Developers" showTrail={true} dropdownItems={developerDropdownItems} />
				<NavigationItem title="Ecosystem" showTrail={true} dropdownItems={ecosystemDropdownItems} />
				<NavigationItem title="Docs" showTrail={false} link="https://docs.concero.io" />
			</div>
		</div>
	)
}
