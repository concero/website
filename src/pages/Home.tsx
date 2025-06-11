import type { FC } from 'react'
import { WhyUs } from '@/components/whyus/WhyUs'
import { Security } from '@/components/security/Security'
import { Data } from '@/components/data/Data'
import { Chains } from '@/components/chains/Chains'
import { Roadmap } from '@/components/roadmap/Roadmap'

export const Home: FC = (): JSX.Element => {
	return (
		<main>
			<WhyUs />
			<Chains />
			<Security />
			<Data />
			<Roadmap />
		</main>
	)
}
