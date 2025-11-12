import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Reach } from './reach/Reach'
import { Build } from './build/Build'

export const Home: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Reach />
			<Build />
		</>
	)
}
