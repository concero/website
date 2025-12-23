import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'
import { useWidthScreen } from '@/hooks/useWidthScreen'
import { useModalContext } from '@/reducer/modal/modalContext'
import { links } from '@/configuration/links'

export const Action: FC = (): ReactElement => {
	const isHdDesktop = useWidthScreen('desktop', 'down')
	const { dispatch } = useModalContext()
	const handleStartBuilding = () => {
		dispatch({ type: 'OPEN_CONTACT' })
	}
	const handleDocumentation = () => {
		window.open(links.documentation, '_blank', undefined)
	}
	return (
		<div className="overview_action">
			<div className="overview_action_content">
				<span className="overview_action_title">Build your cross-chain protocol today</span>
				<div className="overview_action_actions">
					<Button variant="primary" size={isHdDesktop ? 'l' : 'xl'} isFull onClick={handleDocumentation}>
						Start Building
					</Button>
					<Button variant="secondary" size={isHdDesktop ? 'l' : 'xl'} isFull onClick={handleStartBuilding}>
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	)
}
