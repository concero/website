import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'
import { useWidthScreen } from '@/hooks/useWidthScreen'

export const Action: FC = (): ReactElement => {
	const isHdDesktop = useWidthScreen('desktop', 'down')
	const onStartBuild = () => {
		console.log('start build')
	}
	return (
		<div className="lanca_action">
			<div className="lanca_action_content">
				<span className="lanca_action_title">Integrate Lanca today</span>
				<div className="lanca_action_actions">
					<Button variant="primary" size={isHdDesktop ? 'l' : 'xl'} onClick={onStartBuild} isFull>
						Start Building
					</Button>
					<Button variant="secondary" size={isHdDesktop ? 'l' : 'xl'} isFull>
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	)
}
