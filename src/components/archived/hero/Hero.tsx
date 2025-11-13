import type { FC } from 'react'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@concero/ui-kit'
import { TwitterDarkIcon } from '@/assets/icons/twitterDark'
import { DiscordDarkIcon } from '@/assets/icons/discordDark'
import { MediumDarkIcon } from '@/assets/icons/mediumDark'
import { links } from '@/configuration/links'
import { SocialIcon } from '../../common/SocialIcon/SocialIcon'
import { useIsMobile, useIsTablet, useIsUltrawide } from '@/hooks/useMediaQuery'
import { useModalContext } from '@/reducer/modal/modalContext'
import './Hero.pcss'

const SOCIALS = [
	{ icon: <TwitterDarkIcon />, name: 'twitter' as const, link: links.twitter },
	{ icon: <DiscordDarkIcon />, name: 'discord' as const, link: links.discord },
	{ icon: <MediumDarkIcon />, name: 'medium' as const, link: links.medium },
] as const

const WORDS = ['in minutes', 'for asset issuers', 'for protocols', 'for dApps', 'for you'] as const
const WORD_INTERVAL = 3400

const ANIMATION_VARIANTS = {
	initial: { opacity: 0, y: -5 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -5 },
} as const

const ANIMATION_TRANSITION = {
	duration: 0.4,
	ease: [0.4, 0, 0.2, 1] as const,
} as const

export const Hero: FC = (): JSX.Element => {
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()
	const isUltrawide = useIsUltrawide()
	const { dispatch } = useModalContext()
	const [wordIndex, setWordIndex] = useState(0)

	const isSmallDevice = isMobile || isTablet
	const isLargeDevice = isTablet || isUltrawide

	const heroImage = useMemo(
		() => (isTablet ? '/Hero/HeroTablet.webp' : isMobile ? '/Hero/HeroMobile.png' : '/Hero/Hero.webp'),
		[isMobile, isTablet],
	)

	const buttonSize = useMemo(() => (isLargeDevice ? 'xl' : 'l'), [isLargeDevice])

	useEffect(() => {
		const interval = setInterval(() => {
			setWordIndex(prev => (prev + 1) % WORDS.length)
		}, WORD_INTERVAL)

		return () => clearInterval(interval)
	}, [])

	const handleContactClick = useCallback(() => {
		dispatch({ type: 'OPEN_CONTACT' })
	}, [dispatch])

	return (
		<section className="hero">
			<div className="hero_content">
				<div className="hero_main_content">
					<div className="hero_description">
						<h1 className="hero_title_container">
							<span className="hero_title">
								Purpose-built interoperability
								{isSmallDevice && <br />}
								<span className="concero_color">
									{!isSmallDevice && ' '}
									<AnimatePresence mode="wait">
										<motion.span
											key={wordIndex}
											variants={ANIMATION_VARIANTS}
											initial="initial"
											animate="animate"
											exit="exit"
											transition={ANIMATION_TRANSITION}
											style={{ display: 'inline-block' }}
										>
											{WORDS[wordIndex]}
										</motion.span>
									</AnimatePresence>
								</span>
							</span>
						</h1>
						<p className="hero_subtitle">
							Take control of distribution by configuring your interoperability stack
						</p>
					</div>
					<div className="hero_actions">
						<Button size={buttonSize} variant="secondary_color" onClick={handleContactClick}>
							Contact us
						</Button>
						<div className="hero_socials">
							{SOCIALS.map(({ icon, name, link }) => (
								<SocialIcon key={name}  icon={icon} social={name} link={link} />
							))}
						</div>
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
