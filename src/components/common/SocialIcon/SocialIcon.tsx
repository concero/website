import type { FC, ReactNode} from 'react'
import "./SocialIcon.pcss"

export type Social = 'twitter' | 'discord' | 'medium'

type SocialWidgetProps = {
	icon: ReactNode
	link: string
	social: Social
}

export const SocialIcon: FC<SocialWidgetProps> = ({ link, icon, social }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`social_icon ${social}`}
		>
			{icon}
		</a>
	)
}
