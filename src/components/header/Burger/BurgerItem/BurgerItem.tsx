import type { FC, ReactNode } from 'react'
import "./BurgerItem.pcss"

type BurgerItemProps = {
	title: string
	href: string
	icon: ReactNode
}

export const BurgerSectionItem: FC<BurgerItemProps> = ({ title, href, icon }) => (
	<a href={href} target="_blank" rel="noopener noreferrer" className="header_burger_section_item_link">
		<div className="header_burger_section_item">
			<div className="header_bruger_item_icon_container">
				<div className="header_burger_icon_wrapper">{icon}</div>
			</div>
			<span className="header_burger_section_item_title">{title}</span>
		</div>
	</a>
)
