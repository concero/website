import type { FC } from 'react'
import { useMemo } from 'react'
import { Logo } from './Logo/Logo'
import { Actions } from './Actions/Actions'
import './Header.pcss'

export const Header: FC = (): JSX.Element => {

	const headerLogo = useMemo(() => {
		return <Logo />
	}, [])



	const headerActions = useMemo(() => {
		return <Actions />
	}, [])

	return (
		<header className="header">
			{headerLogo}
			{headerActions}
		</header>
	)
}
