import type { FC, ReactNode } from 'react'
import { DropdownItem } from './DropdownItem/DropdownItem'
import './Dropdown.pcss'

interface DropdownItemType {
	readonly link: string
	readonly icon: ReactNode
	readonly title: string
}

interface DropdownProps {
	items: readonly DropdownItemType[]
}

export const Dropdown: FC<DropdownProps> = ({ items }) => {
	return (
		<div className="header_nav_dropdown" role="menu">
			<div className="header_nav_dropdown_container">
				{items.map(item => (
					<DropdownItem key={item.link} link={item.link} icon={item.icon} title={item.title} />
				))}
			</div>
		</div>
	)
}
