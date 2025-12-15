import { useEffect, useState } from 'react'
import cls from './Partners.module.pcss'
interface LogoData {
	readonly src: string
	readonly alt: string
}

const LOGOS: readonly LogoData[] = [
	{ src: '/Partners/Chainlink.svg', alt: 'Chainlink' },
	{ src: '/Partners/Symbiotic.svg', alt: 'Symbiotic' },
	{ src: '/Partners/Biconomy.svg', alt: 'Biconomy' },
	{ src: '/Partners/Unichain.svg', alt: 'Unichain' },
	{ src: '/Partners/Arbitrum.svg', alt: 'Arbitrum' },
] as const

const BREAKPOINT_WIDTH = 1195

const useWindowWidth = (): number => {
	const [windowWidth, setWindowWidth] = useState<number>(
		typeof window !== 'undefined' ? window.innerWidth : BREAKPOINT_WIDTH,
	)

	useEffect(() => {
		const handleResize = (): void => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return (): void => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}
type TProps = {
	className?: string
}
export const Partners = ({ className }: TProps) => {
	const windowWidth = useWindowWidth()
	const shouldAnimate = windowWidth < BREAKPOINT_WIDTH

	return (
		<div
			className={`${cls.home_reach_partners} ${shouldAnimate ? cls['home_reach_partners--scrolling'] : ''} ${className}`}
		>
			<div className={cls.home_reach_partners_wrapper}>
				<div className={cls.home_reach_partners_track} key={shouldAnimate ? 'animate' : 'static'}>
					{LOGOS.map((logo: LogoData, index: number) => (
						<img
							key={`logo-${index}`}
							src={logo.src}
							alt={logo.alt}
							className={cls.home_reach_partners_logo}
						/>
					))}
					{shouldAnimate &&
						LOGOS.map((logo: LogoData, index: number) => (
							<img
								key={`logo-duplicate-${index}`}
								src={logo.src}
								alt={logo.alt}
								className={cls.home_reach_partners_logo}
								aria-hidden="true"
							/>
						))}
				</div>
			</div>
		</div>
	)
}
