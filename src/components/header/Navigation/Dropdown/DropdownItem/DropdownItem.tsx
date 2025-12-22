import type { FC, ReactNode } from 'react'
import type { TTagVariant } from '@concero/ui-kit'
import { Tag } from '@concero/ui-kit'
import './DropdownItem.pcss'

export interface DropdownItem {
	link: string
	icon: ReactNode
	title: string
	subtitle: string
	tag?: { text: string; variant?: TTagVariant }
	disabled?: boolean
}

export const DropdownItem: FC<DropdownItem> = ({ link, icon, title, subtitle, tag, disabled = false }) => {
	const isExternal = link && !link.startsWith('/') && !link.startsWith(window.location.origin)
	const anchorProps = disabled
		? { 'aria-disabled': true, onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault() }
		: { href: link, target: isExternal ? '_blank' : undefined, rel: isExternal ? 'noopener noreferrer' : undefined }

	return (
		<a {...anchorProps} className={`dropdown_item${disabled ? ' dropdown_item_disabled' : ''}`}>
			<div className="dropdown_item_icon">
				<div className="dropdown_item_icon_wrapper">{icon}</div>
			</div>
			<div className="dropdown_item_content">
				<div className="dropdown_item_header">
					<div className="dropdown_item_title">{title}</div>
					{tag && (
						<Tag variant={tag.variant || 'neutral'} size="s" className="dropdown_item_tag">
							{tag.text}
						</Tag>
					)}
				</div>
				<div className="dropdown_item_subtitle">{subtitle}</div>
			</div>
		</a>
	)
}
