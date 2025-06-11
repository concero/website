import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import { TwitterIcon } from '@/assets/icons/twitter'
import { DiscordIcon } from '@/assets/icons/discord'
import { MediumIcon } from '@/assets/icons/medium'
import { links } from '@/configuration/links'
import { SocialIcon } from '../common/SocialIcon/SocialIcon'
import { useIsTablet, useIsUltrawide } from '@/hooks/useMediaQuery'
import './Hero.pcss'

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
		link: links.madium,
	},
] as const

export const Hero: FC = (): JSX.Element => {
	const isTablet = useIsTablet()
	const isUltrawide = useIsUltrawide()

	return (
		<section className="hero">
			<div className="hero_content">
				<div className="hero_description">
					<div className="hero_title_container">
						<span className="hero_title">
							Interoperability solution that is <span className="concero_color">scalable</span>
						</span>
					</div>
					<span className="hero_subtitle">Go anywhere with Concero today</span>
				</div>
				<div className="hero_actions">
					<Button size={isTablet || isUltrawide ? 'xl' : 'l'} variant="secondary_color">
						Contact us
					</Button>
					<div className="hero_socials">
						{socials.map(({ icon, name, link }) => (
							<SocialIcon key={name} icon={icon} social={name} link={link} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
