import { ReactNode } from 'react'
import { IconButton, Tag, TTagVariant } from '@concero/ui-kit'
import './BurgerItem.pcss'

type BurgerSectionItemProps = {
	title: string
	subtitle?: string
	href: string
	icon: ReactNode
	showTag?: boolean
	tagText?: string
	tagVariant?: TTagVariant
	disabled?: boolean
}

export const BurgerSectionItem = ({
	title,
	subtitle,
	href,
	icon,
	showTag = false,
	tagText,
	tagVariant = 'neutral',
	disabled = false,
}: BurgerSectionItemProps) => {
	if (disabled) {
		return (
			<div className="burger_item_link burger_item_link_disabled" aria-disabled="true" tabIndex={-1}>
				<div className="burger_item burger_item_disabled">
					<div className="burger_item_icon_container">
						<div className="burger_icon_wrapper">{icon}</div>
					</div>
					<div className="burger_text_container">
						<div className="burger_title_section">
							<span className="burger_item_title">{title}</span>
							{showTag && tagText && (
								<Tag variant={tagVariant} size="s" className="burger_item_tag">
									{tagText}
								</Tag>
							)}
						</div>
						{subtitle && <span className="burger_item_subtitle">{subtitle}</span>}
					</div>
				</div>
			</div>
		)
	}

	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="burger_item_link">
			<div className="burger_item">
				<div className="burger_item_icon_container">
					<div className="burger_icon_wrapper">{icon}</div>
				</div>
				<div className="burger_text_container">
					<div className="burger_title_section">
						<span className="burger_item_title">{title}</span>
						{showTag && tagText && (
							<Tag variant={tagVariant} size="s" className="burger_item_tag">
								{tagText}
							</Tag>
						)}
					</div>
					{subtitle && <span className="burger_item_subtitle">{subtitle}</span>}
				</div>
			</div>
		</a>
	)
}
