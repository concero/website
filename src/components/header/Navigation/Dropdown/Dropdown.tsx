import type { FC, ReactNode } from 'react'
import type { TTagVariant } from '@concero/ui-kit'
import { DropdownItem } from './DropdownItem/DropdownItem'
import { LancaAction } from '@/components/common/LancaAction/LancaAction'
import './Dropdown.pcss'

type DropdownItemType = {
    readonly link: string
    readonly icon: ReactNode
    readonly title: string
    readonly tag?: {
        readonly text: string
        readonly variant?: TTagVariant
    }
}

interface DropdownProps {
    items: readonly DropdownItemType[]
    specialAction?: boolean
}

export const Dropdown: FC<DropdownProps> = ({ items, specialAction = true }) => {
    return (
        <div className="header_nav_dropdown" role="menu">
            <div className="header_nav_dropdown_container">
                {items.map(item => (
                    <DropdownItem
                        key={item.link}
                        link={item.link}
                        icon={item.icon}
                        title={item.title}
                        tag={item.tag}
                    />
                ))}
                {specialAction && <LancaAction />}
            </div>
        </div>
    )
}
