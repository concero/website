import type { FC, ReactNode } from 'react'
import { useState, useRef, useCallback, useEffect } from 'react'
import { OpenTrail } from '@/assets/icons/openTrail'
import { CloseTrail } from '@/assets/icons/closeTrail'
import { Dropdown } from '../Dropdown/Dropdown'
import './NavigationItem.pcss'

type DropdownItem = {
	readonly title: string
	readonly link: string
	readonly icon: ReactNode
}

type NavigationItemProps = {
	readonly title: string
	readonly showTrail: boolean
	readonly link?: string
	readonly dropdownItems?: readonly DropdownItem[]
}

export const NavigationItem: FC<NavigationItemProps> = ({ title, link, showTrail, dropdownItems = [] }) => {
	const [open, setOpen] = useState(false)
	const timeoutRef = useRef<number | null>(null)
	const hasItems = dropdownItems.length > 0

	const clearTimeout = useCallback(() => {
		if (timeoutRef.current !== null) {
			window.clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}
	}, [])

	const handleMouseEnter = useCallback(() => {
		clearTimeout()
		setOpen(true)
	}, [clearTimeout])

	const handleMouseLeave = useCallback(() => {
		timeoutRef.current = window.setTimeout(() => {
			setOpen(false)
		}, 100)
	}, [])

	const handleDropdownEnter = useCallback(() => {
		clearTimeout()
	}, [clearTimeout])

	const handleDropdownLeave = useCallback(() => {
		handleMouseLeave()
	}, [handleMouseLeave])

	useEffect(() => () => clearTimeout(), [clearTimeout])

	return link ? (
		<a href={link} className="header_nav_item" target="_blank" rel="noopener noreferrer" aria-label={title}>
			<div className="header_nav_item_content">
				<span className="header_nav_item_title">{title}</span>
				{showTrail && <OpenTrail aria-hidden="true" />}
			</div>
		</a>
	) : (
		<div
			className={`header_nav_item ${open ? 'header_nav_item_active' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			aria-haspopup={hasItems ? 'menu' : undefined}
			aria-expanded={hasItems ? open : undefined}
		>
			<div className="header_nav_item_content">
				<span className="header_nav_item_title">{title}</span>
				{showTrail && (
					<div className="header_nav_item_trail" aria-hidden="true">
						{open ? <CloseTrail /> : <OpenTrail />}
					</div>
				)}
			</div>
{open && hasItems && (
  <div 
    className="dropdown-wrapper"
    onMouseEnter={handleDropdownEnter} 
    onMouseLeave={handleDropdownLeave}
  >
    <Dropdown items={dropdownItems} />
  </div>
)}
		</div>
	)
}
