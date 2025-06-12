import type { FC, ReactNode } from 'react'
import './SocialIcon.pcss'

export type Social = 'twitter' | 'discord' | 'medium'

type SocialWidgetProps = {
	icon: ReactNode
	link: string
	social: Social
	isGrey?: boolean
}

export const SocialIcon: FC<SocialWidgetProps> = ({ link, icon, social, isGrey = false }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`social_icon ${social} ${isGrey ? 'social_icon_grey' : ''}`}
		>
			{icon}
		</a>
	)
}
