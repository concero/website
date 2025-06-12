import { useState, useEffect } from 'react'
import { Button, IconButton } from '@concero/ui-kit'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { MenuIcon } from '@/assets/icons/menu'
import { CloseIcon } from '@/assets/icons/close'
import { Burger } from '../Burger/Burger'
import { ContactModal } from '@/components/common/ContactModal/ContactModal'
import './Actions.pcss'

export const Actions = () => {
	const [is_open, set_is_open] = useState<boolean>(false)
	const [is_contact_modal_open, set_is_contact_modal_open] = useState<boolean>(false)
	const is_tablet = useIsTablet()
	const is_mobile = useIsMobile()
	const show_burger = is_mobile || is_tablet

	useEffect(() => {
		if (!show_burger) set_is_open(false)
	}, [show_burger])

	const handleContactClick = () => {
		set_is_contact_modal_open(true)
	}

	const handleCloseContactModal = () => {
		set_is_contact_modal_open(false)
	}

	return (
		<>
			<div className="actions_container">
				<div className="actions_buttons">
					{!is_open && (
						<>
							<Button
								size="s"
								variant="secondary_color"
								onClick={() => window.open('https://testnet.concero.io', '_blank')}
							>
								Open Testnet
							</Button>
							{!is_mobile && (
								<Button size="s" variant="primary" onClick={handleContactClick}>
									Contact us
								</Button>
							)}
						</>
					)}
					{show_burger && (
						<IconButton size="s" variant="secondary" onClick={() => set_is_open(prev => !prev)}>
							{is_open ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
					)}
				</div>
			</div>
			{is_open && <Burger />}
			<ContactModal isOpen={is_contact_modal_open} onClose={handleCloseContactModal} />
		</>
	)
}
