import UnicornScene from 'unicornstudio-react'
import cls from './Hero.module.pcss'
import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modal/modalContext'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import { Text } from '@/components/common/Text/Text'
import { Partners } from './Partners/Partners'

export const Hero = (): JSX.Element => {
	const isDesktopOrLess = useWidthScreen('desktop', 'down')
	const isDesktop = useWidthScreen('desktop', 'only')
	const isTablet = useWidthScreen('tablet', 'only')
	const isMobile = useWidthScreen('mobile', 'only')
	// let heightImage = 1024
	// if (isDesktop) {
	// 	heightImage = 720
	// } else if (isTablet) {
	// 	heightImage = 1133
	// } else if (isMobile) {
	// 	heightImage = 667
	// }
	const { dispatch } = useModalContext()
	const onContactUs = () => {
		dispatch({ type: 'OPEN_CONTACT' })
	}
	const onStartBuild = () => {
		window.open('https://docs.concero.io/', '_blank', 'noopener,noreferrer')
	}
	return (
		<section className={cls.hero}>
			<UnicornScene
				key={`Unicorn ${isDesktop} ${isMobile} ${isTablet}`}
				jsonFilePath={'/Hero/hero.json'}
				width="100%"
				height="100%"
				scale={1}
				className={cls.backgroung_animation}
			/>
			<div className={cls.heading}>
				<div className={cls.title_block}>
					<Text
						variant={
							isMobile ? 'heading_xxlarge' : isDesktopOrLess ? 'heading_xxxlarge' : 'heading_xxxxlarge'
						}
						className={cls.title}
					>
						DeFi’s largest distribution rails
					</Text>
					<Text variant={isMobile ? 'heading_medium' : 'heading_large'} className={cls.description}>
						Maximise your on-chain Total Attainable Market
					</Text>
				</div>
				<div className={cls.action_block}>
					<Button variant="primary" size={isTablet ? 'l' : 'xl'} onClick={onStartBuild} isFull>
						{isMobile ? 'Connect' : 'Start Building'}
					</Button>
					<Button variant="secondary" size={isTablet ? 'l' : 'xl'} onClick={onContactUs} isFull>
						Contact Us
					</Button>
				</div>
			</div>
			<Partners className={cls.partners} />
		</section>
	)
}
