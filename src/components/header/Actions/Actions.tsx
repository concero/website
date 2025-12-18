import { useState, useEffect, useMemo, useCallback } from 'react'
import { Button, IconButton } from '@concero/ui-kit'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { MenuIcon } from '@/assets/icons/menu'
import { CloseIcon } from '@/assets/icons/close'
import { Burger } from '../Burger/Burger'
import './Actions.pcss'

export const Actions = () => {
	const [isOpen, setIsOpen] = useState(false)
	// const { dispatch } = useModalContext()
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()

	const showBurger = useMemo(() => isMobile || isTablet, [isMobile, isTablet])
	const buttonSize = useMemo(() => (isTablet || isMobile ? 'm' : 's'), [isMobile, isTablet])

	useEffect(() => {
		if (!showBurger) setIsOpen(false)
	}, [showBurger])

	// const handleContactClick = useCallback(() => {
	// 	dispatch({ type: 'OPEN_CONTACT' })
	// }, [dispatch])
	const onStartBuild = () => {
		window.open('https://docs.concero.io/', '_blank', 'noopener,noreferrer')
	}
	const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

	return (
		<>
			<div className="actions_container">
				<div className="actions_buttons">
					{!isOpen && (
						<Button size={buttonSize} variant="primary" onClick={onStartBuild}>
							Start Building
						</Button>
					)}
					{showBurger && (
						<IconButton size={buttonSize} variant="secondary" onClick={toggleMenu}>
							{isOpen ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
					)}
				</div>
			</div>
			{isOpen && <Burger />}
		</>
	)
}
