import type { FC } from 'react'
import { DropdownItem } from './DropdownItem/DropdownItem'
import { SocialActions } from '@/components/common/SocialActions/SocialActions'
import './Dropdown.pcss'

type DropdownProps = {
	items: DropdownItem[]
	showSocials?: boolean
	width?: string
}

export const Dropdown: FC<DropdownProps> = ({ items, showSocials = false, width }) => (
	<div className="dropdown" role="menu" style={{ width, minWidth: width }}>
		<div className="dropdown_container">
			{items.map(item => (
				<DropdownItem key={item.link} {...item} />
			))}
			{showSocials && <SocialActions />}
		</div>
	</div>
)
