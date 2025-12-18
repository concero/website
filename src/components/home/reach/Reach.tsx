import type { ReactElement } from 'react'
import { ReachCard } from '@/components/common/ReachCard/ReachCard'
import { DataCard } from '@/components/common/DataCard/DataCard'
import './Reach.pcss'
import { Button } from '@concero/ui-kit'
import UnicornScene from 'unicornstudio-react'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import { Text } from '@/components/common/Text/Text'

const ProtocolCards = (): ReactElement => {
	const isDesktop = useWidthScreen('desktop', 'only')
	const isTablet = useWidthScreen('tablet', 'only')
	const isMobile = useWidthScreen('mobile', 'only')
	let heightImage = 613
	if (isDesktop) {
		heightImage = 400
	} else if (isTablet) {
		heightImage = 712
	} else if (isMobile) {
		heightImage = 343
	}
	return (
		<div className="home_reach_protocols">
			<ReachCard
				metaTitle="Cross-chain liquidity protocol"
				title="Lanca"
				subtitle="Move your liquidity seamlessly between any chains you need"
				tags={['Chains', 'Protocols', 'Asset issuers']}
				ActionNode={
					<Button variant="secondary_color" size="xl">
						About Lanca
					</Button>
				}
				ImageNode={
					<UnicornScene
						jsonFilePath={'/Reach/lanca.json'}
						height={heightImage}
						scale={1}
						className="home_reach_animation_background"
					/>
				}
			/>
			<ReachCard
				metaTitle="Deposit/Withdrawal protocol"
				title="Depo"
				subtitle="Enable cross-chain deposits/withdrawals and unlock extra yield"
				tags={['Prediction Markets', 'Margin Venues', 'Liquidity Apps']}
				ActionNode={
					<Button variant="secondary_color" size="xl" isDisabled>
						About Depo
					</Button>
				}
				isSoon
				ImageNode={
					<UnicornScene
						jsonFilePath={'/Reach/depo.json'}
						height={heightImage}
						scale={1}
						className="home_reach_animation_background"
					/>
				}
			/>
			<ReachCard
				metaTitle="Asset distribution protocol"
				title="Distro"
				subtitle="Distribute your asset across thousands of chains"
				tags={['RWA', 'Stablecoins', 'Tokens']}
				ActionNode={
					<Button variant="secondary_color" size="xl" isDisabled>
						About Distro
					</Button>
				}
				isSoon
				ImageNode={
					<UnicornScene
						jsonFilePath={'/Reach/distro.json'}
						height={heightImage}
						scale={1}
						className="home_reach_animation_background"
					/>
				}
			/>
		</div>
	)
}

const MotherboardCard = () => {
	const isDesktop = useWidthScreen('desktop', 'only')
	const isTablet = useWidthScreen('tablet', 'only')
	const isMobile = useWidthScreen('mobile', 'only')
	let heightImage = 581
	if (isDesktop) {
		heightImage = 368
	} else if (isTablet) {
		heightImage = 712
	} else if (isMobile) {
		heightImage = 343
	}
	return (
		<div className="home_reach_motherboard">
			<div className="home_reach_motherboard_header">
				<div className="home_reach_motherboard_heading">
					<Text variant="body_large" className="home_reach_motherboard_header_meta_title">
						Open Interoperability Framework
					</Text>
					<div className="home_reach_motherboard_header_description_wrap">
						<span className="home_reach_motherboard_header_description_wrap_title">Motherboard</span>
						<span className="home_reach_motherboard_header_description_wrap_subtitle">
							Build any cross-chain protocol with full autonomy
						</span>
					</div>
				</div>
				<Button variant="secondary_color" size="xl">
					Learn More
				</Button>
			</div>

			<UnicornScene
				jsonFilePath={'/Reach/motherboard.json'}
				height={heightImage}
				scale={1}
				className="home_reach_animation_background"
			/>
		</div>
	)
}

const DataCards = (): ReactElement => (
	<div className="home_reach_data">
		<DataCard title="Total Reachable Wallets" number="150M+" isAccent />
		<DataCard title="Chains" number="500+" />
		<DataCard title="Supported VMs" number="1" />
		<DataCard title="Avg. deployment time" number="20 min" />
	</div>
)

const ReachOptions = (): ReactElement => {
	return (
		<div className="home_reach_options">
			<ProtocolCards />
			<MotherboardCard />
			<DataCards />
		</div>
	)
}

export const Reach = (): ReactElement => {
	return (
		<section className="home_reach">
			<span className="home_reach_title">Reach millions of users</span>
			<ReachOptions />
		</section>
	)
}
