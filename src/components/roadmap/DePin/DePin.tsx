import type { FC } from 'react'
import { useIsMobile } from '@/hooks/useMediaQuery'
import './DePin.pcss'

export const DePin: FC = (): JSX.Element => {
	//
	const isMobile = useIsMobile()
	return (
		<div className="depin">
			<div className="depin_description_container">
				<div className="depin_title_container">
					<span className="depin_title">Concero Network</span>
					<span className="depin_index">03</span>
				</div>
				<span className="depin_subtitle">
					Lightweight Network for decentralised fetching and delivery of txs
				</span>
			</div>
			<div className="depin_content_container">
				<div className="depin_illustration_container">
					<img
						src={isMobile ? '/Roadmap/DePin2.svg' : '/Roadmap/DePin.svg'}
						alt="DePIN Network"
						className="depin_illustration"
					/>
				</div>
			</div>
		</div>
	)
}
