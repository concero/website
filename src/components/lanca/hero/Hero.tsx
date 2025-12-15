import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'
import UnicornScene from 'unicornstudio-react'

const HeroHeading = () => (
	<div className="lanca_hero_description">
		<div className="lanca_hero_title_container">
			<span className="lanca_hero_title">Lanca</span>
			<span className="lanca_hero_subtitle">Cross-chain liquidity protocol</span>
		</div>
		<span className="lanca_hero_subtitle_description">Move liquidity across thousands of chains</span>
	</div>
)

const HeroActions = () => (
	<div className="lanca_hero_actions">
		<Button variant="primary" size="l">
			Start Building
		</Button>
		<Button variant="secondary" size="l">
			Contact Us
		</Button>
	</div>
)

export const Hero: FC = (): ReactElement => (
	<section className="lanca_hero">
		<div className="lanca_hero_heading">
			<HeroHeading />
			<HeroActions />
		</div>
		<div className={'lanca_hero_backgroung_animation_wrap'}>
			
			<UnicornScene
				jsonFilePath={'/Lanca/Hero/hero.json'}
				width="100%"
				scale={1}
				className={'lanca_hero_backgroung_animation'}
			/>
		</div>
	</section>
)
