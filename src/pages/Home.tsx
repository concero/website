import type { FC } from 'react'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'
import { WhyUs } from '@/components/whyus/WhyUs'
import { Security } from '@/components/security/Security'
import { Data } from '@/components/data/Data'
import { Chains } from '@/components/chains/Chains'
import { Roadmap } from '@/components/roadmap/Roadmap'
import { Build } from '@/components/build/Build'
import { Hero } from '@/components/hero/Hero'

const META_TITLE = 'Concero'
export const Home: FC = (): JSX.Element => {
	return (
		<>
			<MetaTags title={META_TITLE} />
			<main>
				<Hero />
				<WhyUs />
				<Chains />
				<Security />
				<Data />
				<Roadmap />
				<Build />
			</main>
		</>
	)
}
