import type { FC, ReactElement } from 'react'
import { BuildCard } from '@/components/common/BuildCard/BuildCard'
import './Build.pcss'
import { links } from '@/configuration/links'
import UnicornScene from 'unicornstudio-react'
import { useWidthScreen } from '@/hooks/useWidthScreen'

export const Build: FC = (): ReactElement => {
	const isTabletOrless = useWidthScreen('tablet', 'down')
	return (
		<section className="home_build">
			<span className="home_build_title">Build with us</span>
			<div className="home_build_content">
				<BuildCard
					isColumn={isTabletOrless}
					isInverse={isTabletOrless}
					title="Take your project cross-chain"
					bullets={['Reach millions of users', 'Unlock new revenue streams', 'Own your distribution']}
					url={links.overview}
					buttonText="Docs"
					ImageNode={<UnicornScene jsonFilePath={'/Build/take_your_project_cross-chain.json'} scale={1} />}
				/>
				<BuildCard
					isColumn={isTabletOrless}
					title="Build cross-chain protocols"
					bullets={[
						'Build the logic and inherit the reach',
						'Optimised infra for your needs',
						'Remain Sovereign',
					]}
					isInverse
					url={links.documentation}
					buttonText="Docs"
					ImageNode={<UnicornScene jsonFilePath={'/Build/cross_chain_protocols.json'} scale={1} />}
				/>
				<BuildCard
					isColumn={isTabletOrless}
					isInverse={isTabletOrless}
					title="Connect to motherboard"
					bullets={['Provide infrastructure', 'Focus on your specialty', 'Compete on merit']}
					url={links.overview}
					buttonText="Docs"
					ImageNode={<UnicornScene jsonFilePath={'/Build/connect_motherboard.json'} scale={1} />}
				/>
			</div>
		</section>
	)
}
