import type { FC } from 'react'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { links } from '@/configuration/links'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { MessagingIcon } from '@/assets/icons/messaging'
import { SwapIcon } from '@/assets/icons/swap'
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
                    icon:   <MessagingIcon color="#66767D" />,
                    showTag: true,
                    tagText: '.PDF' 
                },
                { 
                    title: 'Bridging Whitepaper', 
                    link: links.lanca_whitepaper, 
                    icon: <SwapIcon />,
                    showTag: true,
                    tagText: '.PDF'
                },
            ],
            specialAction: false,
        },
        {
            title: 'Ecosystem & Apps',
            dropdownItems: [
                { title: 'Provide Liquidity', link: links.liquidity, icon: <LiquidityIcon /> },
                { title: 'Rewards Portal', link: links.rewards, icon: <RewardsIcon /> },
            ],
            specialAction: true,
        },
        { title: 'Blog', link: links.blog },
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