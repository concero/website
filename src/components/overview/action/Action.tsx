import type { FC, ReactElement } from 'react'
import { Button } from '@concero/ui-kit'
import './Action.pcss'

export const Action: FC = (): ReactElement => {
    return (
        <div className="overview_action">
            <div className="overview_action_content">
                <span className="overview_action_title">Build your cross-chain protocol today</span>
                <div className="overview_action_actions">
                    <Button variant="primary" className="overview_action_button" size="xl">
                        Start Building
                    </Button>
                    <Button variant="secondary" className="overview_action_button" size="xl">
                        Let's chat
                    </Button>
                </div>
            </div>
        </div>
    )
}
