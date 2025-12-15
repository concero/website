import UnicornScene from 'unicornstudio-react'
import cls from './Hero.module.pcss'
import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modal/modalContext'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import { Text } from '@/components/common/Text/Text'
import { Partners } from './Partners/Partners'

export const Hero = (): JSX.Element => {
	const isDesktop = useWidthScreen('desktop', 'down')
	const isMobile = useWidthScreen('mobile', 'only')
	const { dispatch } = useModalContext()
	const handleStartBuilding = () => {
		dispatch({ type: 'OPEN_CONTACT' })
	}
	return (
		<section className={cls.hero}>
			<UnicornScene
				jsonFilePath={'/Hero/hero.json'}
				width="100%"
				height="1024px"
				scale={0.8}
				className={cls.backgroung_animation}
			/>
			<div className={cls.heading}>
				<div className={cls.title_block}>
					<Text
						variant={isMobile ? 'heading_xxlarge' : isDesktop ? 'heading_xxxlarge' : 'heading_xxxxlarge'}
						className={cls.title}
					>
						DeFi’s largest distribution rails
					</Text>
					<Text variant={isMobile ? 'heading_medium' : 'heading_large'} className={cls.description}>
						Maximise your on-chain Total Attainable Market
					</Text>
				</div>
				<div className={cls.action_block}>
					<Button variant="primary" size="xl" onClick={handleStartBuilding} isFull>
						Start Building
					</Button>
					<Button variant="secondary" size="xl" isFull>
						Contact Us
					</Button>
				</div>
			</div>
			<Partners className={cls.partners} />
		</section>
	)
}
