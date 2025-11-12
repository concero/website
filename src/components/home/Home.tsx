import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Reach } from './reach/Reach'
import { Build } from './build/Build'
import { Action } from './action/Action'

export const Home: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Reach />
			<Build />
			<Action />
		</>
	)
}
