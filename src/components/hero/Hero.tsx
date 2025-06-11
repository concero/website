import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import { TwitterIcon } from '@/assets/icons/twitter'
import { DiscordIcon } from '@/assets/icons/discord'
import { MediumIcon } from '@/assets/icons/medium'
import { links } from '@/configuration/links'
import { SocialIcon } from '../common/SocialIcon/SocialIcon'
import { useIsMobile, useIsTablet, useIsUltrawide } from '@/hooks/useMediaQuery'
import './Hero.pcss'

const SOCIALS = [
	{
		icon: <TwitterIcon />,
		name: 'twitter' as const,
		link: links.twitter,
	},
	{
		icon: <DiscordIcon />,
		name: 'discord' as const,
		link: links.discord,
	},
	{
		icon: <MediumIcon />,
		name: 'medium' as const,
		link: links.medium,
	},
] as const

export const Hero: FC = (): JSX.Element => {
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()
	const isUltrawide = useIsUltrawide()

	const heroImage = isTablet ? '/Hero/HeroTablet.png' : isMobile ? '/Hero/HeroMobile.svg' : '/Hero/Hero.svg'
	const buttonSize = isTablet || isUltrawide ? 'xl' : 'l'

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
					<Button size={buttonSize} variant="secondary_color">
						Contact us
					</Button>
					<div className="hero_socials">
						{SOCIALS.map(({ icon, name, link }) => (
							<SocialIcon key={name} icon={icon} social={name} link={link} />
						))}
					</div>
				</div>
				<div className="hero_illustration_container">
					<img
						src={heroImage}
						alt="Hero Illustration"
						className="hero_illustration"
						loading="eager"
						decoding="async"
					/>
				</div>
			</div>
		</section>
	)
}
