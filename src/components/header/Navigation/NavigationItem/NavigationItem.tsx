import type { FC } from 'react'
import type { DropdownItem } from '../Dropdown/DropdownItem/DropdownItem'
import type { TTagVariant } from '@concero/ui-kit/dist/common/Tag/Tag'
import { OpenTrail } from '@/assets/icons/openTrail'
import { Dropdown } from '../Dropdown/Dropdown'
import { Tag } from '@concero/ui-kit'
import './NavigationItem.pcss'

export type NavigationItemProps = {
  title: string
  link?: string
  showDropdown: boolean
  dropdownItems?: DropdownItem[]
  showSocials?: boolean
  dropdownWidth?: string
  disabled?: boolean
  tag?: { text: string; variant?: TTagVariant }
}

export const NavigationItem: FC<NavigationItemProps> = ({
  title,
  link,
  showDropdown,
  dropdownItems = [],
  showSocials = false,
  dropdownWidth,
  disabled = false,
  tag,
}) => {
  if (link && disabled) {
    return (
      <div className="nav_item nav_item_disabled" aria-disabled="true" tabIndex={-1}>
        <div className="nav_item_content">
          <span className="nav_item_title_with_tag">
            <span className="nav_item_title">{title}</span>
            {tag && (
              <Tag variant={tag.variant} size="s" className="nav_item_tag">
                {tag.text}
              </Tag>
            )}
          </span>
        </div>
      </div>
    )
  }

  if (link) {
    return (
      <a href={link} className="nav_item" target="_blank" rel="noopener noreferrer" aria-label={title}>
        <div className="nav_item_content">
          <span className="nav_item_title">{title}</span>
          {showDropdown && (
            <div className="nav_item_trail" aria-hidden="true">
              <OpenTrail />
            </div>
          )}
        </div>
      </a>
    )
  }

  const hasDropdown = dropdownItems.length > 0

  return (
    <div className={`nav_item${hasDropdown ? ' nav_item_dropdown' : ''}`}>
      <div className="nav_item_content">
        <span className="nav_item_title">{title}</span>
        {showDropdown && (
          <div className="nav_item_trail" aria-hidden="true">
            <OpenTrail />
          </div>
        )}
      </div>
      {hasDropdown && (
        <div className="dropdown_wrapper">
          <Dropdown items={dropdownItems} showSocials={showSocials} width={dropdownWidth} />
        </div>
      )}
    </div>
  )
}
