import UnicornScene from 'unicornstudio-react'
import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modal/modalContext'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import { Text } from '@/components/common/Text/Text'
import { HStack, VStack } from '@/components/common/Stack'
import cls from './Hero.module.pcss'

export const Hero = (): JSX.Element => {
	const isDesktopOrLess = useWidthScreen('desktop', 'down')
	const isDesktop = useWidthScreen('desktop', 'only')
	const isTablet = useWidthScreen('tablet', 'only')
	const isMobile = useWidthScreen('mobile', 'only')
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
				height="auto"
				scale={1}
				className={cls.backgroung_animation}
			/>

			<VStack align="center" max>
				<VStack gap="16px" align="center" justify="center" className={cls.heading} max>
					<VStack gap="space_0_5" align="center" className={cls.title_block}>
						<Text
							variant={
								isMobile
									? 'heading_xxlarge'
									: isDesktopOrLess
										? 'heading_xxxlarge'
										: 'heading_xxxxlarge'
							}
							className={cls.title}
						>
							The Stripe for Appchains
						</Text>
						<Text variant={isMobile ? 'heading_medium' : 'heading_large'} className={cls.description}>
							The easiest way for appchains to onboard users and accept funds from any chain. One
							integration, 99% market reach, zero friction for your users and a new revenue primitive.
						</Text>
					</VStack>
					<HStack gap="space_0_5" justify="center" className={cls.action_block}>
						<Button variant="primary" size={'m'} onClick={onStartBuild}>
							Get Started
						</Button>
						<Button variant="secondary" size={'m'} onClick={onContactUs}>
							Talk to Founder
						</Button>
					</HStack>
				</VStack>
			</VStack>
			<div className={cls.img_wrap}>
				<img src="/Hero/hero.webp" alt="" />
			</div>
		</section>
	)
}
