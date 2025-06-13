import type { FC } from 'react'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { links } from '@/configuration/links'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import './Navigation.pcss'

export const Navigation: FC = (): JSX.Element => {
    const items = [
        {
            title: 'For Developers',
            dropdownItems: [
                { title: 'Documentation', link: links.documentation, icon: <DocumentationIcon /> },
                { 
                    title: 'Messaging Whitepaper', 
                    link: links.whitepaper, 
                    icon: <DocumentationIcon />,
                    showTag: true,
                    tagText: '.PDF' 
                },
                { 
                    title: 'Bridging Whitepaper', 
                    link: links.lanca_whitepaper, 
                    icon: <WhitepaperIcon />,
                    showTag: true,
                    tagText: '.PDF'
                },
            ],
            specialAction: false,
        },
        {
            title: 'Ecosystem & Apps',
            dropdownItems: [
                { title: 'Provide Liquidity', link: 'https://app.lanca.io/pools', icon: <LiquidityIcon /> },
                { title: 'Rewards Portal', link: 'https://app.concero.io/rewards', icon: <RewardsIcon /> },
            ],
            specialAction: true,
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