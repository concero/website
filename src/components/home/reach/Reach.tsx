import type { FC, ReactElement } from 'react'
import { useMemo, useEffect, useState } from 'react'
import { ReachCard } from '@/components/common/ReachCard/ReachCard'
import { DataCard } from '@/components/common/DataCard/DataCard'
import { links } from '@/configuration/links'
import './Reach.pcss'

interface LogoData {
	readonly src: string
	readonly alt: string
}

const ProtocolCards: FC = (): ReactElement => (
	<div className="home_reach_protocols">
		<ReachCard
			title="Lanca"
			subtitle="Cross-chain liquidity protocol"
			description="Move your liquidity across thousands of chains"
			href={links.lanca}
		/>
		<ReachCard
			title="Depo"
			subtitle="Deposit and withdrawal protocol"
			description="Deposit & withdraw across thousands of chains"
			href={links.depo}
		/>
		<ReachCard
			title="Distro"
			subtitle="Token distribution protocol"
			description="Distribute your asset across thousands of chains"
			href={links.distro}
		/>
	</div>
)

const MotherboardCard: FC = (): ReactElement => (
	<div className="home_reach_motherboard">
		<ReachCard title="Motherboard" subtitle="Open Interoperability Framework" href={links.overview} />
	</div>
)

const DataCards: FC = (): ReactElement => (
	<div className="home_reach_data">
		<DataCard title="Total Reachable Wallets" number="163,024,531" isDark />
		<DataCard title="Chains" number="1,503" />
		<DataCard title="Supported VMs" number="1" />
		<DataCard title="AVG. deployment time" number="20 min" />
	</div>
)

const ReachOptions: FC = (): ReactElement => {
	return (
		<div className="home_reach_options">
			<ProtocolCards />
			<MotherboardCard />
			<DataCards />
		</div>
	)
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

const Partners: FC = (): ReactElement => {
	const windowWidth = useWindowWidth()
	const shouldAnimate = windowWidth < BREAKPOINT_WIDTH

	return (
		<div className={`home_reach_partners ${shouldAnimate ? 'home_reach_partners--scrolling' : ''}`}>
			<div className="home_reach_partners_wrapper">
				<div className="home_reach_partners_track" key={shouldAnimate ? 'animate' : 'static'}>
					{LOGOS.map((logo: LogoData, index: number) => (
						<img key={`logo-${index}`} src={logo.src} alt={logo.alt} className="home_reach_partners_logo" />
					))}
					{shouldAnimate &&
						LOGOS.map((logo: LogoData, index: number) => (
							<img
								key={`logo-duplicate-${index}`}
								src={logo.src}
								alt={logo.alt}
								className="home_reach_partners_logo"
								aria-hidden="true"
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export const Reach: FC = (): ReactElement => {
	const options = useMemo((): ReactElement => <ReachOptions />, [])
	const partners = useMemo((): ReactElement => <Partners />, [])

	return (
		<section className="home_reach">
			<span className="home_reach_title">Reach millions of users</span>
			{options}
			{partners}
		</section>
	)
}
