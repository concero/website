import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'

export const Action: FC = (): ReactElement => {
	return (
		<div className="lanca_action">
			<div className="lanca_action_content">
				<span className="lanca_action_title">Integrate Lanca today</span>
				<div className="lanca_action_actions">
					<Button variant="primary" className="lanca_action_button" size="xl">
						Start Building
					</Button>
					<Button variant="secondary" className="lanca_action_button" size="xl">
						Let's chat
					</Button>
				</div>
			</div>
		</div>
	)
}
