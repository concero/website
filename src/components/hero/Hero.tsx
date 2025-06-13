import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import { TwitterDarkIcon } from '@/assets/icons/twitterDark'
import { DiscordDarkIcon } from '@/assets/icons/discordDark'
import { MediumDarkIcon } from '@/assets/icons/mediumDark'
import { links } from '@/configuration/links'
import { SocialIcon } from '../common/SocialIcon/SocialIcon'
import { useIsMobile, useIsTablet, useIsUltrawide } from '@/hooks/useMediaQuery'
import { AnimatedWords } from '../common/WordAnimation/WordAnimation'
import { useModalContext } from '@/reducer/modalContext'
import './Hero.pcss'

const SOCIALS = [
    {
        icon: <TwitterDarkIcon />,
        name: 'twitter' as const,
        link: links.twitter,
    },
    {
        icon: <DiscordDarkIcon />,
        name: 'discord' as const,
        link: links.discord,
    },
    {
        icon: <MediumDarkIcon />,
        name: 'medium' as const,
        link: links.medium,
    },
] as const

export const Hero: FC = (): JSX.Element => {
    const isMobile = useIsMobile()
    const isTablet = useIsTablet()
    const isUltrawide = useIsUltrawide()
    const { dispatch } = useModalContext()

    const heroImage = isTablet ? '/Hero/HeroTablet.png' : isMobile ? '/Hero/HeroMobile.svg' : '/Hero/Hero.svg'
    const buttonSize = isTablet || isUltrawide ? 'xl' : 'l'

    const handleContactClick = () => {
        dispatch({ type: 'OPEN_CONTACT' })
    }

    return (
        <section className="hero">
            <div className="hero_content">
                <div className="hero_description">
                    <div className="hero_title_container">
                        <span className="hero_title">
                            Interoperability solution that is{' '}
                            <span className="concero_color">
                                <AnimatedWords />
                            </span>
                        </span>
                    </div>
                    <span className="hero_subtitle">Go anywhere with Concero today</span>
                </div>
                <div className="hero_actions">
                    <Button size={buttonSize} variant="secondary_color" onClick={handleContactClick}>
                        Contact us
                    </Button>
                    <div className="hero_socials">
                        {SOCIALS.map(({ icon, name, link }) => (
                            <SocialIcon key={name} isGrey icon={icon} social={name} link={link} />
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