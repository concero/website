import { useMemo, type FC } from 'react'
import { Logo } from './Logo/Logo'
import { Actions } from './Actions/Actions'
import { Navigation } from './Navigation/Navigaton'
import './Header.pcss'

export const Header: FC = (): JSX.Element => {
	const headerLogo = useMemo(() => {
		return <Logo />
	}, [])

	const headerNav = useMemo(() => {
		return <Navigation />
	}, [])

	const headerActions = useMemo(() => {
		return <Actions />
	}, [])

	return (
		<header className="header">
			{headerLogo}
			{headerNav}
			{headerActions}
		</header>
	)
}
