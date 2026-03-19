import { useState, useEffect, useMemo } from 'react'
import { Button } from '@concero/ui-kit'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import './Actions.pcss'

export const Actions = () => {
	const [isOpen, setIsOpen] = useState(false)
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()

	const showBurger = useMemo(() => isMobile || isTablet, [isMobile, isTablet])
	const buttonSize = useMemo(() => (isTablet || isMobile ? 'm' : 's'), [isMobile, isTablet])

	useEffect(() => {
		if (!showBurger) setIsOpen(false)
	}, [showBurger])

	
	const onStartBuild = () => {
		window.open('https://docs.concero.io/', '_blank', 'noopener,noreferrer')
	}

	return (
		<>
			<div className="actions_container">
				<div className="actions_buttons">
					{!isOpen && (
						<Button size={buttonSize} variant="primary" onClick={onStartBuild}>
							Get Started
						</Button>
					)}
				
				</div>
			</div>
		</>
	)
}
