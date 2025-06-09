import type { FC } from 'react'
import { useMemo } from 'react'
import { Logo } from './Logo/Logo'
import { Actions } from './Actions/Actions'
import { Navigation } from './Navigation/Navigaton'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import './Header.pcss'

export const Header: FC = (): JSX.Element => {
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()

	const headerLogo = useMemo(() => {
		return <Logo />
	}, [])

	const headerNav = useMemo(() => {
		return (isTablet || isMobile) ? null : <Navigation />
	}, [isTablet, isMobile])

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
