import type { FC, ReactElement } from 'react'
import { Hero } from './hero/Hero'
import { Benefits } from './benefits/Benefits'

export const Overview: FC = (): ReactElement => {
	return (
		<>
			<Hero />
			<Benefits />
		</>
	)
}
