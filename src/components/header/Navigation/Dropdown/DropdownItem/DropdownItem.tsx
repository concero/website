import type { FC, ReactNode } from 'react'
import './DropdownItem.pcss'

type DropdownItemProps = {
	link: string
	icon: ReactNode
	title: string
}

export const DropdownItem: FC<DropdownItemProps> = ({ link, icon, title }): JSX.Element => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="header_nav_dropdown_item">
				<div className="header_nav_dropdown_item_icon">
					<div className="header_nav_icon_wrapper">{icon}</div>
				</div>
				<div className="header_nav_dropdown_item_title">{title}</div>
			</div>
		</a>
	)
}
