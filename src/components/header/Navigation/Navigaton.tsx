import type { FC } from 'react'
import type { TTagVariant } from '@concero/ui-kit'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { links } from '@/configuration/links'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { SearchIcon } from '@/assets/icons/search'
import { DropdownItemType } from './Dropdown/Dropdown'
import { OverviewIcon } from '@/assets/icons/overview'
import { ConsoleIcon } from '@/assets/icons/console'
import { LiqudityProtocolIcon } from '@/assets/icons/liquidityProtocol'
import { DepoIcon } from '@/assets/icons/depo'
import { DistroIcon } from '@/assets/icons/distro'
import { RewardsIcon } from '@/assets/icons/rewards'
import './Navigation.pcss'

type NavigationItemData = {
    title: string
    link?: string
    dropdownItems?: DropdownItemType[]
    dropdownWidth?: string
    disabled?: boolean
    tag?: {
        text: string
        variant?: TTagVariant
    }
}

export const Navigation: FC = (): JSX.Element => {
    const items: NavigationItemData[] = [
        {
            title: 'Motherboard',
            dropdownItems: [
                {
                    title: 'Overview',
                    link: '#',
                    subtitle: 'Design, actors and specs',
                    icon: <OverviewIcon />,
                },
                {
                    title: 'Scan',
                    link: links.scan,
                    subtitle: 'Track transactions',
                    icon: <SearchIcon />,
                },
                {
                    title: 'Console',
                    link: links.scan,
                    subtitle: 'Observability and onboarding',
                    icon: <ConsoleIcon />,
                    disabled: true,
                    tag: {
                        text: 'Soon',
                        variant: 'neutral',
                    },
                },
                {
                    title: 'Documentation',
                    link: links.documentation,
                    icon: <DocumentationIcon />,
                    subtitle: 'Technical guides for developers',
                },
            ],
            dropdownWidth: '301px',
        },
        {
            title: 'Products',
            dropdownItems: [
                {
                    title: 'Lanca',
                    link: links.swap,
                    subtitle: 'Cross-chain liquidity protocol',
                    icon: <LiqudityProtocolIcon />,
                },
                {
                    title: 'Depo',
                    link: '#',
                    subtitle: 'Deposit/Withdrawal protocol',
                    icon: <DepoIcon />,
                },
                {
                    title: 'Distro',
                    link: '#',
                    subtitle: 'Token distribution protocol',
                    icon: <DistroIcon />,
                },
            ],
            dropdownWidth: '323px',
        },
        {
            title: 'Community',
            dropdownItems: [
                {
                    title: 'Community Portal',
                    link: links.rewards,
                    subtitle: 'Rewards and testing hub',
                    icon: <RewardsIcon />,
                },
                {
                    title: 'Developer Community',
                    link: links.discord,
                    subtitle: 'Chat with other developers',
                    icon: <DepoIcon />,
                },
            ],
            dropdownWidth: '280px',
        },
        {
            title: 'Ecosystem',
            link: links.blog,
            disabled: true,
            tag: {
                text: 'Soon',
                variant: 'neutral',
            },
        },
    ]

    return (
        <div className="nav_container">
            <nav className="nav">
                {items.map(item => (
                    <NavigationItem
                        key={item.title}
                        title={item.title}
                        showTrail={!!item.dropdownItems}
                        link={item.link}
                        dropdownItems={item.dropdownItems}
                        showSocials={item.title === 'Community'}
                        dropdownWidth={item.dropdownWidth}
                        disabled={item.disabled}
                        tag={item.tag}
                    />
                ))}
            </nav>
        </div>
    )
}
