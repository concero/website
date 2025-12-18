import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'
import UnicornScene from 'unicornstudio-react'
import { useWidthScreen } from '@/hooks/useWidthScreen'

const HeroHeading = () => (
	<div className="lanca_hero_description">
		<div className="lanca_hero_title_container">
			<span className="lanca_hero_title">Lanca</span>
			<span className="lanca_hero_subtitle">Cross-chain liquidity protocol</span>
		</div>
		<span className="lanca_hero_subtitle_description">Move liquidity across thousands of chains</span>
	</div>
)

const HeroActions = () => {
	const isTablet = useWidthScreen('tablet', 'only')
	return (
		<div className="lanca_hero_actions_wrap">
			<div className="lanca_hero_actions">
				<Button variant="primary" size={isTablet ? 'l' : 'xl'} isFull>
					Start Building
				</Button>
				<Button variant="secondary" size={isTablet ? 'l' : 'xl'} isFull>
					Contact Us
				</Button>
			</div>
		</div>
	)
}

export const Hero: FC = (): ReactElement => {
	const isDesktop = useWidthScreen('desktop', 'only')
	const isTablet = useWidthScreen('tablet', 'only')
	const isMobile = useWidthScreen('mobile', 'only')
	let heightImage = 670
	if (isDesktop) {
		heightImage = 398
	} else if (isTablet) {
		heightImage = 795
	} else if (isMobile) {
		heightImage = 251
	}
	console.log({ heightImage })

	return (
		<section className="lanca_hero">
			<div className="lanca_hero_content">
				<div className="lanca_hero_backgroung_animation_wrap">
					<UnicornScene
						jsonFilePath={'/Lanca/Hero/hero.json'}
						width="100%"
						scale={1}
						height={heightImage}
						className={'lanca_hero_backgroung_animation'}
					/>
				</div>

				<div className="lanca_hero_heading">
					<HeroHeading />
					<HeroActions />
				</div>
			</div>
		</section>
	)
}
