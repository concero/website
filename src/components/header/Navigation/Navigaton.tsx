import type { FC } from 'react'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { links } from '@/configuration/links'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { MessagingIcon } from '@/assets/icons/messaging'
import { SearchIcon } from '@/assets/icons/search'
import { RewardsIcon } from '@/assets/icons/rewards'
import { DiscordDarkIcon } from '@/assets/icons/discordDark'
import { TwitterDarkIcon } from '@/assets/icons/twitterDark'
import './Navigation.pcss'

export const Navigation: FC = (): JSX.Element => {
    const items = [
        {
            title: 'For Developers',
            dropdownItems: [
                { 
                    title: 'Documentation', 
                    link: links.documentation, 
                    icon: <DocumentationIcon /> 
                },
                {
                    title: 'Whitepaper',
                    link: links.whitepaper,
                    icon: <MessagingIcon color="#66767D" />,
                    tag: { 
                        text: '.PDF', 
                        variant: 'neutral' as const 
                    },
                },
            ],
            specialAction: false,
        },
        {
            title: 'Ecosystem & Apps',
            dropdownItems: [
                { 
                    title: 'Concero Scan', 
                    link: links.liquidity, 
                    icon: <SearchIcon />,
					tag: { 
                        text: 'New!', 
                        variant: 'branded' as const 
                    },
                },
            ],
            specialAction: true,
        },

		{
            title: 'Community',
            dropdownItems: [
                { 
                    title: 'Rewards Portal', 
                    link: links.rewards, 
                    icon: <RewardsIcon /> 
                },
                {
                    title: 'Discord',
                    link: links.discord,
                    icon: <DiscordDarkIcon />,
                },
				                {
                    title: 'X',
                    link: links.twitter,
                    icon: <TwitterDarkIcon />,
                },
            ],
        },
        { 
            title: 'Blog', 
            link: links.blog 
        },

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
