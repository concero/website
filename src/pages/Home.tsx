import type { FC } from 'react'
import { useMemo } from 'react'
import { Hero } from '@/components/hero/Hero'

export const Home: FC = (): JSX.Element => {
	const hero = useMemo(() => {
		return <Hero />
	}, [])

	return <main>{hero}</main>
}
