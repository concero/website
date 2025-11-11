import type { FC } from 'react'
import { OpenTrail } from '@/assets/icons/openTrail'
import { Dropdown, DropdownItemType } from '../Dropdown/Dropdown'
import './NavigationItem.pcss'

export type NavigationItemProps = {
    title: string
    showTrail: boolean
    link?: string
    dropdownItems?: DropdownItemType[]
    showSocials?: boolean
    dropdownWidth?: string 
}

export const NavigationItem: FC<NavigationItemProps> = ({
    title,
    link,
    showTrail,
    dropdownItems = [],
    showSocials = false,
    dropdownWidth,
}) => {
    const hasDropdown = dropdownItems.length > 0

    if (link) {
        return (
            <a href={link} className="nav_item" target="_blank" rel="noopener noreferrer" aria-label={title}>
                <div className="nav_item_content">
                    <span className="nav_item_title">{title}</span>
                    {showTrail && (
                        <div className="nav_item_trail" aria-hidden="true">
                            <OpenTrail />
                        </div>
                    )}
                </div>
            </a>
        )
    }

    return (
        <div className={`nav_item ${hasDropdown ? 'nav_item_dropdown' : ''}`}>
            <div className="nav_item_content">
                <span className="nav_item_title">{title}</span>
                {showTrail && (
                    <div className="nav_item_trail" aria-hidden="true">
                        <OpenTrail />
                    </div>
                )}
            </div>
            {hasDropdown && (
                <div className="dropdown_wrapper">
                    <Dropdown 
                        items={dropdownItems} 
                        showSocials={showSocials} 
                        width={dropdownWidth} 
                    />
                </div>
            )}
        </div>
    )
}
