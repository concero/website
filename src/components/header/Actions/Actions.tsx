import { useState, useEffect, useMemo, useCallback } from 'react'
import { Button, IconButton } from '@concero/ui-kit'
import { useIsMobile, useIsTablet, useIsUltrawide } from '@/hooks/useMediaQuery'
import { MenuIcon } from '@/assets/icons/menu'
import { CloseIcon } from '@/assets/icons/close'
import { Burger } from '../Burger/Burger'
import { useModalContext } from '@/reducer/modal/modalContext'
import './Actions.pcss'

export const Actions = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { dispatch } = useModalContext()
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()
	const isUltrawide = useIsUltrawide()

	const showBurger = useMemo(() => isMobile || isTablet, [isMobile, isTablet])
	const buttonSize = useMemo(() => (isUltrawide ? 'l' : 's'), [isUltrawide])

	useEffect(() => {
		if (!showBurger) setIsOpen(false)
	}, [showBurger])

	const handleContactClick = useCallback(() => {
		dispatch({ type: 'OPEN_CONTACT' })
	}, [dispatch])

	const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

	return (
		<>
			<div className="actions_container">
				<div className="actions_buttons">
					{!isOpen && (
						<Button
							size={buttonSize}
							variant="primary"
							onClick={handleContactClick}
							className="action_button"
						>
							Start Building
						</Button>
					)}
					{showBurger && (
						<IconButton
							size={buttonSize}
							variant="secondary"
							onClick={toggleMenu}
							className="burger_button"
						>
							{isOpen ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
					)}
				</div>
			</div>
			{isOpen && <Burger />}
		</>
	)
}
