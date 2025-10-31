import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { Tag } from '@concero/ui-kit'
import './RoleCard.pcss'

type RoleCardProps = {
	title: string
	description: string
	tags: string[]
	img: string
}

export const RoleCard: FC<RoleCardProps> = memo(({ title, description, tags, img }): ReactElement => {
	return (
		<article className="role_card">
			<div className="role_card_content">
				<div className="role_card_description">
					<h3 className="role_card_title">{title}</h3>
					<p className="role_card_subtitle">{description}</p>
				</div>
				<div className="role_card_tags" role="list">
					{tags.map(tag => (
						<Tag key={tag} variant="branded" className="role_card_tag">
							{tag}
						</Tag>
					))}
				</div>
			</div>
			<div className="role_card_visual">
				<img src={img} alt={`${title} visual representation`} loading="lazy" />
			</div>
		</article>
	)
})
