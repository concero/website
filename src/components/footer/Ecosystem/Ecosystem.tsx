import type { FC } from 'react'
import './Ecosystem.pcss'

export const Ecosystem: FC = (): JSX.Element => {
	return (
		<div className="footer_content_ecosystem_wrapper">
			<div className="footer_content_ecosystem_section">
				<div className="footer_content_ecosystem_title">Ecosystem</div>
				<div className="footer_content_ecosystem_links">
					<a href="https://app.concero.io/rewards" className="footer_content_ecosystem_link">
						Rewards Portal
					</a>
					<a href="https://app.concero.io/liquidity" className="footer_content_ecosystem_link">
						Provide Liquidity
					</a>
				</div>
			</div>
			<div className="footer_content_ecosystem_section">
				<div className="footer_content_ecosystem_title">Resources</div>
				<div className="footer_content_ecosystem_links">
					<a href="https://concero.medium.com" className="footer_content_ecosystem_link">
						Blog
					</a>
					<a href="https://docs.concero.io/brand" className="footer_content_ecosystem_link">
						Brand Assets
					</a>
				</div>
			</div>
		</div>
	)
}
