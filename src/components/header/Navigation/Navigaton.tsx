import type { FC } from 'react'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { SwapIcon } from '@/assets/icons/swap'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import './Navigation.pcss'

export const Navigation: FC = (): JSX.Element => {
	const items = [
		{
			title: 'For Developers',
			dropdownItems: [
				{ title: 'Whitepaper', link: '/developers/api', icon: <WhitepaperIcon /> },
				{ title: 'Documentation', link: '/developers/sdks', icon: <DocumentationIcon /> },
			],
		},
		{
			title: 'Ecosystem',
			dropdownItems: [
				{ title: 'Provide Liquidity', link: '/ecosystem/partners', icon: <LiquidityIcon /> },
				{ title: 'Rewards Portal', link: '/ecosystem/use-cases', icon: <RewardsIcon /> },
				{ title: 'Swap & Bridge', link: '/developers/docs', icon: <SwapIcon /> },
			],
		},
		{ title: 'Docs', link: 'https://docs.concero.io' },
	]

	return (
		<div className="header_nav_container">
			<div className="header_nav">
				{items.map(item => (
					<NavigationItem
						key={item.title}
						title={item.title}
						showTrail={!!item.dropdownItems}
						link={item.link}
						dropdownItems={item.dropdownItems}
					/>
				))}
			</div>
		</div>
	)
}
