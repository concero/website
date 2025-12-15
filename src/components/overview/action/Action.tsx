import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'

export const Action: FC = (): ReactElement => {
	return (
		<div className="overview_action">
			<div className="overview_action_content">
				<span className="overview_action_title">Build your cross-chain protocol today</span>
				<div className="overview_action_actions">
					<Button variant="primary" size="l">
						Start Building
					</Button>
					<Button variant="secondary" size="l">
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	)
}
