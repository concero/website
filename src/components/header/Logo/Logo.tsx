import type { FC } from 'react'
import { useMemo } from 'react'
import './Logo.pcss'

export const Logo: FC = (): JSX.Element => {
	const concero = useMemo(() => {
		return <img src="/Header/Concero.svg" alt="Concero" />
	}, [])

	return <div className="header_logo_container">{concero}</div>
}
