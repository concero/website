import { SocialIcon } from '../../common/SocialIcon/SocialIcon'
import { TwitterIcon } from '@/assets/icons/twitter'
import { DiscordIcon } from '@/assets/icons/discord'
import { MediumIcon } from '@/assets/icons/medium'
import './Social.pcss'

const socials = [
	{
		icon: <TwitterIcon />,
		name: 'twitter',
		link: 'https://twitter.com/conceroio',
	},
	{
		icon: <DiscordIcon />,
		name: 'discord',
		link: 'https://discord.gg/concero',
	},
	{
		icon: <MediumIcon />,
		name: 'medium',
		link: 'https://medium.com/concero',
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
