import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'

export const Action: FC = (): ReactElement => {
	return (
		<div className="home_action">
			<div className="home_action_content">
				<span className="home_action_title">Scale with Concero today</span>
				<div className="home_action_actions">
					<Button variant="primary" size="xl" isFull>
						Start Building
					</Button>
					<Button variant="secondary" size="xl" isFull>
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	)
}
