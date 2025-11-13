import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Benefits } from './benefits/Benefits'
import { Infra } from './infra/Infra'
import { Schematics } from './schematics/Schematics'

export const Overview: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Benefits />
			<Schematics />
			<Infra />
		</>
	)
}
