import type { FC, ReactNode } from 'react'
import { DropdownItem } from './DropdownItem/DropdownItem'
import './Dropdown.pcss'

type DropdownItem = {
	link: string
	icon: ReactNode
	title: string
}

type DropdownProps = {
	items: DropdownItem[]
}

export const Dropdown: FC<DropdownProps> = ({ items }): JSX.Element => {
	return (
		<div className="header_nav_dropdown">
			<div className="header_nav_dropdown_container">
				{items.map((item, index) => (
					<DropdownItem key={index} link={item.link} icon={item.icon} title={item.title} />
				))}
			</div>
		</div>
	)
}
