import type { FC } from 'react'
import { useState } from 'react'
import { Button } from '@concero/ui-kit'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { IconButton } from '@concero/ui-kit'
import { MenuIcon } from '@/assets/icons/menu'
import { Burger } from '../Burger/Burger'
import './Actions.pcss'

export const Actions: FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const isTablet = useIsTablet()
	const isMobile = useIsMobile()

	const toggleBurger = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
		<div className="header_actions_container">
			<div className="header_actions">
				<Button size="s" variant="secondary_color">
					Open Testnet
				</Button>
				<Button size="s" variant="primary">
					Contact us
				</Button>
				<IconButton size='s' variant='secondary' onClick={toggleBurger}>
					<MenuIcon />
				</IconButton>
			</div>
		</div>
		{isOpen && <Burger />}
		</>
	)
}
