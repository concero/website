import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import './Actions.pcss'

export const Actions: FC = (): JSX.Element => {
	return (
		<div className="header_actions_container">
			<div className="header_actions">
				<Button size="s" variant="secondary_color">
					Open Testnet
				</Button>
				<Button size="s" variant="primary">
					Contact us
				</Button>
			</div>
		</div>
	)
}
