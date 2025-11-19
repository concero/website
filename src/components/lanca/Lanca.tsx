import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Reach } from './reach/Reach'
import { Benefits } from './benefits/Benefits'
import { Schematics } from './schamatics/Schamatics'
import { Build } from './build/Build'
import { FAQ } from './faq/FAQ'
import { Action } from './action/Action'

export const Lanca: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Reach />
			<Benefits />
			<Schematics />
			<Build />
			<FAQ />
			<Action />
		</>
	)
}
