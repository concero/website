import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { OpenTrail } from '@/assets/icons/openTrail'
import { CloseTrail } from '@/assets/icons/closeTrail'
import { Dropdown } from '../Dropdown/Dropdown'
import './NavigationItem.pcss'

type DropdownItemType = {
	link: string
	icon: ReactNode
	title: string
}

type NavigationItemProps = {
	title: string
	showTrail: boolean
	link?: string
	dropdownItems?: DropdownItemType[]
}

export const NavigationItem: FC<NavigationItemProps> = ({ title, showTrail, link, dropdownItems = [] }) => {
	const [active, setActive] = useState<boolean>(false)

	const content = (
		<div className="header_nav_item_content">
			<span className="header_nav_item_title">{title}</span>
			{showTrail && <div className="header_nav_item_trail">{active ? <CloseTrail /> : <OpenTrail />}</div>}
		</div>
	)

	const handleMouseEnter = () => setActive(true)
	const handleMouseLeave = () => setActive(false)

	return link ? (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="header_nav_item"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{content}
		</a>
	) : (
		<div className="header_nav_item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{content}
			{active && showTrail && dropdownItems.length > 0 && <Dropdown items={dropdownItems} />}
		</div>
	)
}
