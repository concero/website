import type { ReactElement } from 'react'
import { ReachCard } from '@/components/common/ReachCard/ReachCard'
import { DataCard } from '@/components/common/DataCard/DataCard'
import { links } from '@/configuration/links'
import './Reach.pcss'
import { Button } from '@concero/ui-kit'
import UnicornScene from 'unicornstudio-react'

const ProtocolCards = (): ReactElement => (
	<div className="home_reach_protocols">
		<ReachCard
			metaTitle="Cross-chain liquidity protocol"
			title="Lanca"
			subtitle="Move your liquidity seamlessly between any chains you need"
			href={links.lanca}
			tags={['Chains', 'Protocols', 'Asset issuers']}
			ActionNode={
				<Button variant="secondary_color" size="xl">
					About Lanca
				</Button>
			}
			ImageNode={
				<UnicornScene
					jsonFilePath={'/Reach/lanca.json'}
					height={613}
					scale={1}
					className="home_reach_animation_background"
				/>
			}
		/>
		<ReachCard
			metaTitle="Deposit/Withdrawal protocol"
			title="Depo"
			subtitle="Enable cross-chain deposits/withdrawals and unlock extra yield"
			href={links.depo}
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
					height={613}
					scale={1}
					className="home_reach_animation_background"
				/>
			}
		/>
		<ReachCard
			metaTitle="Asset distribution protocol"
			title="Distro"
			subtitle="Distribute your asset across thousands of chains"
			href={links.distro}
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
					height={613}
					scale={1}
					className="home_reach_animation_background"
				/>
			}
		/>
	</div>
)

const MotherboardCard = (): ReactElement => (
	<div className="home_reach_motherboard">
		<ReachCard
			title="Motherboard"
			metaTitle="Open Interoperability Framework"
			subtitle="Build any cross-chain protocol with full autonomy"
			href={links.overview}
			ActionNode={
				<Button variant="secondary_color" size="xl">
					Learn More
				</Button>
			}
			ImageNode={
				<UnicornScene
					jsonFilePath={'/Reach/motherboard.json'}
					height={613}
					scale={1}
					className="home_reach_animation_background"
				/>
			}
		/>
	</div>
)

const DataCards = (): ReactElement => (
	<div className="home_reach_data">
		<DataCard title="Total Reachable Wallets" number="150M+" isAccent />
		<DataCard title="Chains" number="500+" />
		<DataCard title="Supported VMs" number="1" />
		<DataCard title="AVG. deployment time" number="20 min" />
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
