import type { FC, ReactElement } from 'react'
import { ProductReachCard } from '@/components/common/ProductReachCard/ProductReachCard'
import { links } from '@/configuration/links'
import './Reach.pcss'
import UnicornScene from 'unicornstudio-react'

const PROTOCOLS = [
	{
		title: 'Chains',
		description: 'Connect your chain to the liquidity protocol',
		buttonText: 'Deployment Docs',
		buttonHref: links.documentation,
		ImageNode: (
			<UnicornScene
				jsonFilePath={'/Lanca/Reach/chains.json'}
				width="100%"
				scale={1}
				className={'lanca_reach_backgroung_animation'}
			/>
		),
	},
	{
		title: 'Protocols',
		description: 'Enable cross-chain value transfer for your users.',
		buttonText: 'Integration Docs',
		buttonHref: links.documentation,
		ImageNode: (
			<UnicornScene
				jsonFilePath={'/Lanca/Reach/protocols.json'}
				width="100%"
				scale={1}
				className={'lanca_reach_backgroung_animation'}
			/>
		),
	},
	{
		title: 'Asset issuers',
		description: 'Bridge across thousands of chains in seconds.',
		buttonText: 'Lanca App',
		buttonHref: links.swap,
		ImageNode: (
			<UnicornScene
				jsonFilePath={'/Lanca/Reach/assets.json'}
				width="100%"
				scale={1}
				className={'lanca_reach_backgroung_animation'}
			/>
		),
	},
] as const

export const Reach: FC = (): ReactElement => (
	<section className="lanca_reach">
		<span className="lanca_reach_title">Who is Lanca for?</span>
		<div className="lanca_reach_options">
			<div className="lanca_reach_protocols">
				{PROTOCOLS.map(protocol => (
					<ProductReachCard key={protocol.title} {...protocol} />
				))}
			</div>
		</div>
	</section>
)
