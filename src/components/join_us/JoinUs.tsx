import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { Button } from '@concero/ui-kit'
import { RoleCard } from '../common/RoleCard/RoleCard'
import './JoinUs.pcss'

type Data = {
	title: string
	description: string
	tags: string[]
	img: string
}

const data: readonly Data[][] = [
	[
		{
			title: 'Relayer Networks',
			description: 'Trigger Validation + Deliver Proofs',
			tags: ['No RPC needed', 'Reduce Capex', 'No chain-specific clients'],
			img: '/JoinUs/relayer_networks.svg',
		},
		{
			title: 'Verifier Networks',
			description: 'Generate proofs for events',
			tags: ['No RPC needed', 'Reduce Capex', 'No cross-chain infra needed'],
			img: '/JoinUs/verifier_networks.svg',
		},
	],
	[
		{
			title: 'RPC Providers',
			description: 'Provide read/write services',
			tags: ['No setup required', 'Monetise your resting compute'],
			img: '/JoinUs/rpcs.svg',
		},
		{
			title: 'Chains',
			description: 'Deploy Concero Router',
			tags: ['Connect to every chain', 'Reach every user', '30 min setup no added cost'],
			img: '/JoinUs/chains.svg',
		},
	],
] as const

export const JoinUs: FC = memo((): ReactElement => {
	return (
		<section className="join_us">
			<header className="join_us_description">
				<h2 className="join_us_title">Join Concero permissionlessly today</h2>
				<p className="join_us_subtitle">Do what you do best and we will distribute it</p>
			</header>
			<div className="join_us_content">
				{data.map((row, rowIndex) => (
					<div key={`row-${rowIndex}`} className="join_us_content_row">
						{row.map(card => (
							<RoleCard
								key={card.title}
								title={card.title}
								description={card.description}
								tags={card.tags}
								img={card.img}
							/>
						))}
					</div>
				))}
			</div>
			<footer className="join_us_action">
				<p className="join_us_action_title">Compete on merit - not distribution</p>
				<Button variant="primary" size="xl" className="join_us_action_button">
					Join Concero
				</Button>
			</footer>
		</section>
	)
})
