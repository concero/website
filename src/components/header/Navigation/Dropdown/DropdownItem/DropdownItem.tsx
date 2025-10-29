import type { FC, ReactNode } from 'react'
import type { TTagVariant } from '@concero/ui-kit'
import { Tag } from '@concero/ui-kit'
import './DropdownItem.pcss'

type DropdownItemProps = {
    link: string
    icon: ReactNode
    title: string
    tag?: {
        text: string
        variant?: TTagVariant
    }
}

export const DropdownItem: FC<DropdownItemProps> = ({ link, icon, title, tag }): JSX.Element => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="header_nav_dropdown_item">
                <div className="header_nav_dropdown_item_icon">
                    <div className="header_nav_icon_wrapper">{icon}</div>
                </div>
                <div className="header_nav_dropdown_title_container">
                    <div className="header_nav_dropdown_item_title">{title}</div>
                    {tag && (
                        <Tag variant={tag.variant || 'neutral'} size="s">
                            {tag.text}
                        </Tag>
                    )}
                </div>
            </div>
        </a>
    )
}
