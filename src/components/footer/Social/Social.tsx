import { SocialIcon } from '../../common/SocialIcon/SocialIcon'
import { MediumDarkIcon } from '@/assets/icons/mediumDark'
import { DiscordDarkIcon } from '@/assets/icons/discordDark'
import { TwitterDarkIcon } from '@/assets/icons/twitterDark'
import { GithubIcon } from '@/assets/icons/github'
import { LinkedinIcon } from '@/assets/icons/linkedin'
import { links } from '@/configuration/links'
import './Social.pcss'

const socials = [
	{
		icon: <TwitterDarkIcon />,
		name: 'twitter',
		link: links.twitter,
	},
	{
		icon: <DiscordDarkIcon />,
		name: 'discord',
		link: links.discord,
	},
	{
		icon: <MediumDarkIcon />,
		name: 'medium',
		link: links.medium,
	},
	{
		icon: <GithubIcon />,
		name: 'medium',
		link: links.medium,
	},
	{
		icon: <LinkedinIcon />,
		name: 'medium',
		link: links.medium,
	},
] as const

export const Social = () => (
	<div className="social_section">
		<div className="social_icons">
			{socials.map(({ icon, name, link }) => (
				<SocialIcon key={name} icon={icon} social={name} link={link} />
			))}
		</div>
	</div>
)
