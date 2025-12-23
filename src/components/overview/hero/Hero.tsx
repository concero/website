import UnicornScene from 'unicornstudio-react'
import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modal/modalContext'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import cls from './Hero.module.pcss'
import { links } from '@/configuration/links'

export const Hero = (): JSX.Element => {
	const isDesktop = useWidthScreen('desktop', 'only')
	// const isTablet = useWidthScreen('tablet', 'only')
	// const isMobile = useWidthScreen('mobile', 'only')
	// let heightImage = 1024
	// if (isDesktop) {
	// 	heightImage = 720
	// } else if (isTablet) {
	// 	heightImage = 1133
	// } else if (isMobile) {
	// 	heightImage = 667
	// }
	const { dispatch } = useModalContext()
	const handleStartBuilding = () => {
		dispatch({ type: 'OPEN_CONTACT' })
	}
	const handleDocumentation = () => {
		window.open(links.documentation, '_blank', undefined)
	}
	return (
		<section className={cls.hero}>
			<UnicornScene
				jsonFilePath={'/Overview/Hero/motherboard.json'}
				width="100%"
				height="100%"
				scale={0.8}
				className={cls.backgroung_animation}
			/>
			<div className={cls.heading}>
				<div className={cls.title_block}>
					<div className={cls.wrap}>
						<span className={cls.title}>Motherboard</span>
						<span className={cls.subtitle}>Open Interoperability Framework</span>
					</div>

					<div className={cls.description_block}>
						<span className={cls.description_text}>Make infrastructure work for you</span>
					</div>
				</div>
				<div className={cls.action_block}>
					<Button variant="primary" size={isDesktop ? 'l' : 'xl'} isFull onClick={handleDocumentation}>
						Connect
					</Button>
					<Button variant="secondary" size={isDesktop ? 'l' : 'xl'} isFull onClick={handleStartBuilding}>
						Contact Us
					</Button>
				</div>
			</div>
		</section>
	)
}
