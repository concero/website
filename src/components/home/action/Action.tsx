import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'

export const Action: FC = (): ReactElement => {
	const onStartBuild = () => {
		window.open('https://docs.concero.io/', '_blank', 'noopener,noreferrer')
	}
	const onContactUs = () => {
		window.open('https://calendly.com/andy-concero', '_blank', 'noopener,noreferrer')
	}
	return (
		<div className="home_action">
			<div className="home_action_content">
				<span className="home_action_title">Scale with Concero today</span>
				<div className="home_action_actions">
					<Button variant="primary" size="xl" isFull onClick={onStartBuild}>
						Start Building
					</Button>
					<Button variant="secondary" size="xl" isFull onClick={onContactUs}>
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	)
}
