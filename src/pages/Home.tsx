import type { FC } from 'react'
import { WhyUs } from '@/components/whyus/WhyUs'
import { Security } from '@/components/security/Security'
import { Data } from '@/components/data/Data'

export const Home: FC = (): JSX.Element => {
	return (
		<main>
			<WhyUs />
			<Security />
			<Data />
		</main>
	)
}
