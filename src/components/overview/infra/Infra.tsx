import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import { InfraCard } from '@/components/common/InfraCard/InfraCard'
import { links } from '@/configuration/links'
import './Infra.pcss'

const INFRA_CARDS = [
	{
		title: 'Relayers',
		subtitle: 'Transport messages and proofs',
		buttonText: 'Docs',
		buttonHref: links.documentation,
	},
	{
		title: 'Verifiers',
		subtitle: 'Generate proofs',
		buttonText: 'Docs',
		buttonHref: links.documentation,
	},
	{
		title: 'RPCs',
		subtitle: 'Provide read/write services',
		buttonText: 'Docs',
		buttonHref: links.documentation,
	},
	{
		title: 'Chains',
		subtitle: 'Deploy Motherboard to your chain',
		buttonText: 'Docs',
		buttonHref: links.documentation,
	},
] as const

export const Infra: FC = (): ReactElement => (
	<div className="overview_infra">
		<div className="overview_infra_description">
			<div className="overview_infra_description_heading">
				<span className="overview_infra_description_title">Provide Infrastructure</span>
				<span className="overview_infra_description_subtitle">
					Permissinolessly deploy your own module and connect to Motherboard
				</span>
			</div>
			<Button variant="primary" size="xl">
				Integrate
			</Button>
		</div>
		<div className="overview_infra_card">
			{INFRA_CARDS.map(({ title, subtitle, buttonText, buttonHref }) => (
				<InfraCard
					key={title}
					title={title}
					subtitle={subtitle}
					buttonText={buttonText}
					buttonLink={buttonHref}
				/>
			))}
		</div>
	</div>
)
