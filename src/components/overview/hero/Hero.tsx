import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'

const HeroDescription: FC = memo(() => (
	<div className="overview_hero_description">
		<div className="overview_hero_title_container">
			<span className="overview_hero_title">Motherboard</span>
			<span className="overview_hero_title overview_hero_title_gray">Open Interoperability Framework</span>
		</div>
		<span className="overview_hero_subtitle">Make infrastructure work for you</span>
	</div>
))

const HeroActions: FC = memo(() => (
	<div className="overview_hero_actions">
		<Button variant="primary" size="xl" className="overview_hero_action">
			Connect
		</Button>
		<Button variant="secondary" size="xl" className="overview_hero_action">
			Contact Us
		</Button>
	</div>
))

export const Hero: FC = (): ReactElement => (
	<section className="overview_hero">
		<div className="overview_hero_container">
			<div className="overview_hero_content">
				<div className="overview_image_container">
					<img src="/Overview/Hero/Background.png" alt="Hero Background" className="overview_hero_image" />
				</div>
				<HeroDescription />
				<HeroActions />
			</div>
		</div>
	</section>
)
