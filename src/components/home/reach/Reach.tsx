import type { FC, ReactElement } from 'react'
import { useMemo } from 'react'
import { ReachCard } from '@/components/common/ReachCard/ReachCard'
import { DataCard } from '@/components/common/DataCard/DataCard'
import { links } from '@/configuration/links'
import './Reach.pcss'

const ReachOptions: FC = (): ReactElement => {
	return (
		<div className="home_reach_options">
			<div className="home_reach_protocols">
				<ReachCard
					title="Lanca"
					subtitle="Cross-chain liquidity protocol"
					description="Move your liquidity across thousands of chains"
					href={links.swap}
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
			<div className="home_reach_motherboard">
				<ReachCard title="Motherboard" subtitle="Open Interoperability Framework" href={links.overview} />
			</div>
			<div className="home_reach_data">
				<DataCard title="Total Reachable Wallets" number="163,024,531" isDark />
				<DataCard title="Chains" number="1,503" />
				<DataCard title="Supported VMs" number="1" />
				<DataCard title="AVG. deployment time" number="20 min" />
			</div>
		</div>
	)
}

export const Reach: FC = (): ReactElement => {
	const options = useMemo(() => <ReachOptions />, [])
	return (
		<section className="home_reach">
			<span className="home_reach_title">Reach millions of users</span>
			{options}
		</section>
	)
}
