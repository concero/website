import type { FC, ReactNode } from 'react'
import { useState, useRef, useEffect } from 'react'
import { OpenTrail } from '@/assets/icons/openTrail'
import { CloseTrail } from '@/assets/icons/closeTrail'
import { Dropdown } from '../Dropdown/Dropdown'
import './NavigationItem.pcss'

type Item = {
	title: string
	link: string
	icon: ReactNode
}

type Props = {
	title: string
	showTrail: boolean
	link?: string
	dropdownItems?: Item[]
}

export const NavigationItem: FC<Props> = ({ title, link, showTrail, dropdownItems = [] }) => {
	const [open, setOpen] = useState<boolean>(false)
	const ref = useRef<HTMLDivElement>(null)
	const hasItems = dropdownItems.length > 0

	useEffect(() => {
		const handleClick = (e: Event) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [])

	const Icon = open ? CloseTrail : OpenTrail

	return link ? (
		<a href={link} className="header_nav_item" target="_blank" rel="noopener noreferrer">
			<div className="header_nav_item_content">
				<span className="header_nav_item_title">{title}</span>
				{showTrail && (
					<div className="header_nav_item_trail">
						<Icon />
					</div>
				)}
			</div>
		</a>
	) : (
		<div
			ref={ref}
			className="header_nav_item"
			onClick={() => hasItems && setOpen(!open)}
		>
			<div className="header_nav_item_content">
				<span className="header_nav_item_title">{title}</span>
				{showTrail && (
					<div className="header_nav_item_trail">
						<Icon />
					</div>
				)}
			</div>
			{open && hasItems && dropdownItems && <Dropdown items={dropdownItems} />}
		</div>
	)
}
