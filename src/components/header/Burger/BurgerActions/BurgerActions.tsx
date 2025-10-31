import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modal/modalContext'
import { links } from '@/configuration/links'
import './BurgerActions.pcss'

export const BurgerActions = () => {
	const { dispatch } = useModalContext()

	const handleContactClick = () => {
		dispatch({ type: 'OPEN_CONTACT' })
	}

	return (
		<div className="burger_actions">
			<Button
				variant="secondary_color"
				size="l"
				isFull
				onClick={() => {
					window.open(links.scan, '_blank', 'noopener noreferrer')
				}}
			>
				Open Scan
			</Button>
			<Button variant="primary" size="l" isFull onClick={handleContactClick}>
				Contact Us
			</Button>

		</div>
	)
}
