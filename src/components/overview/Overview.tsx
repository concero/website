import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Benefits } from './benefits/Benefits'
import { Infra } from './infra/Infra'

export const Overview: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Benefits />
			<Infra />
		</>
	)
}
