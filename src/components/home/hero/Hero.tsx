import type { FC, ReactElement } from 'react'
import { useMemo } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'

const HeroDescription: FC = () => (
	<div className="home_hero_description">
		<span className="home_hero_title">DeFi's largest distribution rails</span>
		<span className="home_hero_subtitle">Maximise your on-chain Total Attainable Market</span>
	</div>
)

const HeroActions: FC = () => (
	<div className="home_hero_actions">
		<Button variant="primary" size="xl" className="home_hero_action">
			Start Building
		</Button>
		<Button variant="secondary" size="xl" className="home_hero_action">
			Contact Us
		</Button>
	</div>
)

export const Hero: FC = (): ReactElement => {
	const description = useMemo(() => <HeroDescription />, [])
	const actions = useMemo(() => <HeroActions />, [])

	return (
		<section className="home_hero">
			<div className="home_hero_container">
				<div className="home_hero_content">
					{description}
					{actions}
				</div>
			</div>
		</section>
	)
}
