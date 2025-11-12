import type { FC, ReactElement } from 'react'
import { BuildCard } from '@/components/common/BuildCard/BuildCard'
import './Build.pcss'
import { links } from '@/configuration/links'

export const Build: FC = (): ReactElement => {
	return (
		<section className="home_build">
			<span className="home_build_title">Build with us</span>
			<div className="home_build_content">
				<BuildCard
					title="Take your project cross-chain"
					bullets={['Reach millions of users', 'Unlock new revenue streams', 'Own your distribution']}
                    url={links.overview}
                    buttonText='Solutions'
				/>
				<BuildCard
					title="Build cross-chain protocols"
					bullets={[
						'Build the logic and inherit the reach',
						'Optimised infra for your needs',
						'Remain sovereign',
					]}
                    url={links.documentation}
                    buttonText='Documentation'
				/>
				<BuildCard
					title="Connect to the motherboard"
					bullets={['Provide infrastructure', 'Focus on your specialty', 'Compete on merit']}
                    url={links.overview}
                    buttonText='Explore Motherboard'
				/>
			</div>
		</section>
	)
}
