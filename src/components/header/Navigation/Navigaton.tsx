import type { FC } from 'react'
import type { TTagVariant } from '@concero/ui-kit'
import { NavigationItem } from './NavigationItem/NavigationItem'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { SearchIcon } from '@/assets/icons/search'
import { OverviewIcon } from '@/assets/icons/overview'
import { ConsoleIcon } from '@/assets/icons/console'
import { LiqudityProtocolIcon } from '@/assets/icons/liquidityProtocol'
import { DepoIcon } from '@/assets/icons/depo'
import { DistroIcon } from '@/assets/icons/distro'
import { RewardsIcon } from '@/assets/icons/rewards'
import { DropdownItem } from './Dropdown/DropdownItem/DropdownItem'
import { links } from '@/configuration/links'
import './Navigation.pcss'

export type NavigationMenuItem = {
  title: string
  link?: string
  dropdownItems?: DropdownItem[]
  dropdownWidth?: string
  disabled?: boolean
  tag?: { text: string; variant?: TTagVariant }
}

export const Navigation: FC = () => {
  const navItems: NavigationMenuItem[] = [
    {
      title: 'Motherboard',
      dropdownWidth: '301px',
      dropdownItems: [
        { title: 'Overview', link: '#', subtitle: 'Design, actors and specs', icon: <OverviewIcon /> },
        { title: 'Scan', link: links.scan, subtitle: 'Track transactions', icon: <SearchIcon /> },
        {
          title: 'Console',
          link: links.scan,
          subtitle: 'Observability and onboarding',
          icon: <ConsoleIcon />,
          disabled: true,
          tag: { text: 'Soon', variant: 'neutral' },
        },
        {
          title: 'Documentation',
          link: links.documentation,
          subtitle: 'Technical guides for developers',
          icon: <DocumentationIcon />,
        },
      ],
    },
    {
      title: 'Products',
      dropdownWidth: '323px',
      dropdownItems: [
        {
          title: 'Lanca',
          link: links.swap,
          subtitle: 'Cross-chain liquidity protocol',
          icon: <LiqudityProtocolIcon />,
        },
        { title: 'Depo', link: '#', subtitle: 'Deposit/Withdrawal protocol', icon: <DepoIcon /> },
        { title: 'Distro', link: '#', subtitle: 'Token distribution protocol', icon: <DistroIcon /> },
      ],
    },
    {
      title: 'Community',
      dropdownWidth: '280px',
      dropdownItems: [
        { title: 'Community Portal', link: links.rewards, subtitle: 'Rewards and testing hub', icon: <RewardsIcon /> },
        {
          title: 'Developer Community',
          link: links.discord,
          subtitle: 'Chat with other developers',
          icon: <DepoIcon />,
        },
      ],
    },
    {
      title: 'Ecosystem',
      link: links.blog,
      disabled: true,
      tag: { text: 'Soon', variant: 'neutral' },
    },
  ]

  return (
    <div className="nav_container">
      <nav className="nav">
        {navItems.map(
          ({ title, link, dropdownItems, dropdownWidth, disabled, tag }) => (
            <NavigationItem
              key={title}
              title={title}
              link={link}
              dropdownItems={dropdownItems}
              showDropdown={Boolean(dropdownItems)}
              dropdownWidth={dropdownWidth}
              disabled={disabled}
              tag={tag}
              showSocials={title === 'Community'}
            />
          ),
        )}
      </nav>
    </div>
  )
}
