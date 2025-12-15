import UnicornScene from 'unicornstudio-react'
import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modal/modalContext'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import { Text } from '@/components/common/Text/Text'
import cls from './Hero.module.pcss'

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
				jsonFilePath={'/Overview/Hero/motherboard.json'}
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
						Motherboard
					</Text>
					<Text variant={isMobile ? 'heading_medium' : 'heading_large'} className={cls.description}>
						Open Interoperability Framework
					</Text>
				</div>
				<div className={cls.action_block}>
					<Button variant="primary" size="xl" onClick={handleStartBuilding} isFull>
						Connect
					</Button>
					<Button variant="secondary" size="xl" isFull>
						Contact Us
					</Button>
				</div>
			</div>
		</section>
	)
}
