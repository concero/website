import { SocialIcon } from '../../common/SocialIcon/SocialIcon'
import { TwitterIcon } from '@/assets/icons/twitter'
import { DiscordIcon } from '@/assets/icons/discord'
import { MediumIcon } from '@/assets/icons/medium'
import { links } from '@/configuration/links'
import './Social.pcss'

const socials = [
	{
		icon: <TwitterIcon />,
		name: 'twitter',
		link: links.twitter,
	},
	{
		icon: <DiscordIcon />,
		name: 'discord',
		link: links.discord,
	},
	{
		icon: <MediumIcon />,
		name: 'medium',
		link: links.medium,
	},
] as const

export const Social = () => (
	<div className="social_section">
		<h3 className="social_title">Follow</h3>
		<div className="social_icons">
			{socials.map(({ icon, name, link }) => (
				<SocialIcon key={name} icon={icon} social={name} link={link} />
			))}
		</div>
	</div>
)
