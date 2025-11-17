import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Benefits } from './benefits/Benefits'
import { Infra } from './infra/Infra'
import { Schematics } from './schematics/Schematics'
import { Stack } from './stack/Stack'
import { FAQ } from './faq/FAQ'
import { Action } from './action/Action'

export const Overview: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Benefits />
			<Stack />
			<Schematics />
			<Infra />
			<FAQ />
			<Action />
		</>
	)
}
