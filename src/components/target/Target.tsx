import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { TargetCard } from '../common/TargetCard/TargetCard'
import { TargetIcon } from '@/assets/icons/target'
import { BridgeIcon } from '@/assets/icons/bridge'
import { AssetVisual } from './AssetVisual/AssetVisual'
import { ProtocolVisual } from './ProtocolVisual/ProtocolVisual'
import './Target.pcss'

export const Target: FC = memo((): ReactElement => {
	return (
		<section className="target">
			<span className="target_title">Who do we serve</span>
			<div className="target_cards">
				<TargetCard
					title="dApps & Protocols"
					subtitle="Let anyone interact with you"
					icon={<TargetIcon />}
					tags={[
						'Deploy once and reach any user ',
						'No ecosystem lock-ins ',
						'Optimise for you and your users ',
					]}
					visual={<ProtocolVisual />}
				/>
				<TargetCard
					title="Asset Issuers"
					subtitle="Unify liquidity and distribute to any user"
					icon={<BridgeIcon />}
					tags={[
						'Capital-efficient liquidity framework',
						'Full control over your burn/mint rights ',
						'Enforce regulatory requirements',
					]}
					visual={<AssetVisual />}
				/>
			</div>
		</section>
	)
})
