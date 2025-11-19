import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'

const HeroDescription: FC = memo(() => (
	<div className="lanca_hero_description">
		<div className="lanca_hero_title_container">
			<span className="lanca_hero_title">Lanca</span>
			<span className="lanca_hero_title lanca_hero_title_gray">Cross-chain liquidity protocol</span>
		</div>
		<span className="lanca_hero_subtitle">Move liquidity across thousands of chains</span>
	</div>
))

const HeroActions: FC = memo(() => (
	<div className="lanca_hero_actions">
		<Button variant="primary" size="xl" className="lanca_hero_action">
			Connect
		</Button>
		<Button variant="secondary" size="xl" className="lanca_hero_action">
			Contact Us
		</Button>
	</div>
))

export const Hero: FC = (): ReactElement => (
	<section className="lanca_hero">
		<div className="lanca_hero_container">
			<div className="lanca_hero_content">
				<div className="lanca_image_container">
					<img src="/Overview/Hero/Background.png" alt="Hero Background" className="lanca_hero_image" />
				</div>
				<HeroDescription />
				<HeroActions />
			</div>
		</div>
	</section>
)
