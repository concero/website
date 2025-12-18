import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'
import { useModalContext } from '@/reducer/modal/modalContext'

export const Action: FC = (): ReactElement => {
	const { dispatch } = useModalContext()
	const onStartBuild = () => {
		window.open('https://docs.concero.io/', '_blank', 'noopener,noreferrer')
	}
	const onContactUs = () => {
		dispatch({ type: 'OPEN_CONTACT' })
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
