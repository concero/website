import type { FC } from 'react'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'
import { Hero } from '@/components/hero/Hero'
import { HowItWorks } from '@/components/how_it_works/HowItWorks'
import { JoinUs } from '@/components/join_us/JoinUs'
import { Vision } from '@/components/vision/Vision'
import { Insights } from '@/components/insights/Insights'
import { Setup } from '@/components/setup/Setup'
import { Target } from '@/components/target/Target'

const META_TITLE = 'Concero | Cross-chain Messaging & Bridging'
const META_DESCRIPTION =
	'Making cross-chain effortless. A quicker, safer &amp; easier to use cross-chain infrastructure. Scalable, secure, capital efficient and decentralised bridging & messaging'

export const Home: FC = (): JSX.Element => {
	return (
		<>
			<MetaTags title={META_TITLE} description={META_DESCRIPTION} />
			<main>
				{/* <Hero /> */}
				<Target />
				<Setup />
				<HowItWorks />
				<JoinUs />
				<Vision />
				<Insights />
			</main>
		</>
	)
}
