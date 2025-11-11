import type { FC, ReactNode } from 'react'
import type { TTagVariant } from '@concero/ui-kit'
import { DropdownItem } from './DropdownItem/DropdownItem'
import { SocialActions } from '@/components/common/SocialActions/SocialActions'
import './Dropdown.pcss'

export type DropdownItemType = {
    link: string
    icon: ReactNode
    title: string
    subtitle: string
    tag?: {
        text: string
        variant?: TTagVariant
    }
    disabled?: boolean
}

type DropdownProps = {
    items: DropdownItemType[]
    showSocials?: boolean
}

export const Dropdown: FC<DropdownProps> = ({ items, showSocials = false }) => {
    return (
        <div className="dropdown" role="menu">
            <div className="dropdown_container">
                {items.map(item => (
                    <DropdownItem
                        key={item.link}
                        link={item.link}
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                        tag={item.tag}
                        disabled={item.disabled}
                    />
                ))}
                {showSocials && <SocialActions />}
            </div>
        </div>
    )
}
