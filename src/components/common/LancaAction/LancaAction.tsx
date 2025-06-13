import type { FC } from 'react'
import { LancaIcon } from '@/assets/icons/lanca'
import { LancaName } from '@/assets/icons/lancaName'
import './LancaAction.pcss'

type LancaActionProps = {
	size?: 'small' | 'large'
}

export const LancaAction: FC<LancaActionProps> = ({ size = 'large' }): JSX.Element => {
	const containerClass =
		size === 'large'
			? 'lanca_action_container lanca_action_container_large'
			: 'lanca_action_container lanca_action_container_small'

	return (
		<a href="https://lanca.io" target="_blank" rel="noopener noreferrer" className="lanca_action_link">
			<div className={containerClass}>
				<div className="lanca_action_description">
					<LancaIcon />
					<LancaName />
				</div>
				<div className="lanca_action_text_container">
					<span className="lanca_action_text">Fast and decentralized cross chain transactions</span>
				</div>
			</div>
		</a>
	)
}
