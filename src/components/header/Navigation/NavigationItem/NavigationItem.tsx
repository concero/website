import type { FC, ReactNode } from 'react'
import { OpenTrail } from '@/assets/icons/openTrail'
import { Dropdown } from '../Dropdown/Dropdown'
import './NavigationItem.pcss'

type DropdownItem = {
    readonly title: string
    readonly link: string
    readonly icon: ReactNode
    readonly showTag?: boolean
    readonly tagText?: string
}

type NavigationItemProps = {
    readonly title: string
    readonly showTrail: boolean
    readonly link?: string
    readonly dropdownItems?: readonly DropdownItem[]
    readonly specialAction?: boolean
}

export const NavigationItem: FC<NavigationItemProps> = ({
    title,
    link,
    showTrail,
    dropdownItems = [],
    specialAction = false,
}) => {
    const hasItems = dropdownItems.length > 0

    return link ? (
        <a href={link} className="header_nav_item" target="_blank" rel="noopener noreferrer" aria-label={title}>
            <div className="header_nav_item_content">
                <span className="header_nav_item_title">{title}</span>
                {showTrail && <OpenTrail aria-hidden="true" />}
            </div>
        </a>
    ) : (
        <div className="header_nav_item header_nav_item_has_dropdown">
            <div className="header_nav_item_content">
                <span className="header_nav_item_title">{title}</span>
                {showTrail && (
                    <div className="header_nav_item_trail" aria-hidden="true">
                        <OpenTrail />
                    </div>
                )}
            </div>
            {hasItems && (
                <div className="dropdown-wrapper">
                    <Dropdown items={dropdownItems} specialAction={specialAction} />
                </div>
            )}
        </div>
    )
}
