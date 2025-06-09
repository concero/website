import type { FC, ReactNode } from 'react'
import { DropdownItem } from './DropdownItem/DropdownItem'
import './Dropdown.pcss'

type DropdownItemType = {
  link: string
  icon: ReactNode
  title: string
}

type DropdownProps = {
  items: DropdownItemType[]
}

export const Dropdown: FC<DropdownProps> = ({ items }) => {
	console.log('Dropdown items:', items)
  return (
    <div className="header_nav_dropdown" role="menu">
      <div className="header_nav_dropdown_container">
        {items.map((item) => (
          <DropdownItem
            key={item.link} 
            link={item.link}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}
