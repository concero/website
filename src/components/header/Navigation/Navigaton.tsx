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
                { title: 'Whitepaper', link: 'https://concero.io/v2_whitepaper.pdf', icon: <WhitepaperIcon /> },
                { title: 'Documentation', link: 'https://docs.concero.io/', icon: <DocumentationIcon /> },
            ],
            specialAction: false 
        },
        {
            title: 'Ecosystem',
            dropdownItems: [
                { title: 'Provide Liquidity', link: 'https://app.lanca.io/pools', icon: <LiquidityIcon /> },
                { title: 'Rewards Portal', link: 'https://app.concero.io/rewards', icon: <RewardsIcon /> },
                { title: 'Swap & Bridge', link: 'https://app.lanca.io', icon: <SwapIcon /> },
            ],
            specialAction: true 
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
                        specialAction={item.specialAction}
                    />
                ))}
            </div>
        </div>
    )
}