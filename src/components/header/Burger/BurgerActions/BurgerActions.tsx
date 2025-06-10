import { Button } from '@concero/ui-kit'
import './BurgerActions.pcss'

export const BurgerActions = () => (
	<div className="burger_actions">
		<Button
			variant="primary"
			size="xl"
			isFull
			onClick={() => {
				window.location.href = 'mailto:contact@concero.io'
			}}
		>
			Contact Us
		</Button>
		<Button
			variant="secondary_color"
			size="xl"
			isFull
			onClick={() => {
				window.open('https://app.concero.io', '_blank')
			}}
		>
			Open Testnet
		</Button>
	</div>
)
