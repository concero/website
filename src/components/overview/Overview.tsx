import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Benefits } from './benefits/Benefits'
import { Infra } from './infra/Infra'
import { Schematics } from './schematics/Schematics'
import { Stack } from './stack/Stack'
import { FAQ } from './faq/FAQ'

export const Overview: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Benefits />
			<Stack />
			<Schematics />
			<Infra />
			<FAQ />
		</>
	)
}
