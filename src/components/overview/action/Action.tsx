import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'
import { useWidthScreen } from '@/hooks/useWidthScreen'

export const Action: FC = (): ReactElement => {
	const isHdDesktop = useWidthScreen('desktop', 'down')
	return (
		<div className="overview_action">
			<div className="overview_action_content">
				<span className="overview_action_title">Build your cross-chain protocol today</span>
				<div className="overview_action_actions">
					<Button variant="primary" size={isHdDesktop ? 'l' : 'xl'} isFull>
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
