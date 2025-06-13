import { ReactNode } from 'react'
import { Tag } from '@concero/ui-kit'
import './BurgerItem.pcss'

type BurgerItemProps = {
	title: string
	href: string
	icon: ReactNode
	showTag?: boolean
	tagText?: string
}

export const BurgerSectionItem = ({ title, href, icon, showTag, tagText }: BurgerItemProps) => (
	<a href={href} target="_blank" rel="noopener noreferrer" className="burger_item_link">
		<div className="burger_item">
			<div className="burger_item_icon_container">
				<div className="burger_icon_wrapper">{icon}</div>
			</div>
			<div className='burger_title_container'>
				<span className="burger_item_title">{title}</span>
				{showTag && tagText && (
					<Tag variant="neutral" size="s">
						{tagText}
					</Tag>
				)}
			</div>
		</div>
	</a>
)
