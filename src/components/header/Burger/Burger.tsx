import type { FC } from 'react'
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { BlogIcon } from '@/assets/icons/blog'
import { Button } from '@concero/ui-kit'
import './Burger.pcss'

export const Burger: FC = (): JSX.Element => {
	return (
		<div className="header_burger_container">
			<div className="header_burger">
				<div className="header_burger_content">
					<div className="header_burger_section">
						<span className="header_burger_section_title">For Developers</span>
						<div className="header_burger_section_items">
							<a
								href="https://docs.concero.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="header_burger_section_item_link"
							>
								<div className="header_burger_section_item">
									<div className="header_bruger_item_icon_container">
										<div className="header_burger_icon_wrapper">
											<DocumentationIcon />
										</div>
									</div>
									<span className="header_burger_section_item_title">Documentation</span>
								</div>
							</a>
							<a
								href="https://concero.io/v2_whitepaper.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="header_burger_section_item_link"
							>
								<div className="header_burger_section_item">
									<div className="header_bruger_item_icon_container">
										<div className="header_burger_icon_wrapper">
											<WhitepaperIcon />
										</div>
									</div>
									<span className="header_burger_section_item_title">Whitepaper</span>
								</div>
							</a>
						</div>
					</div>
					<div className="header_burger_section_divider" />
					<div className="header_burger_section">
						<span className="header_burger_section_title">Ecosystem</span>
						<div className="header_burger_section_items">
							<a
								href="https://app.concero.io/rewards"
								target="_blank"
								rel="noopener noreferrer"
								className="header_burger_section_item_link"
							>
								<div className="header_burger_section_item">
									<div className="header_bruger_item_icon_container">
										<div className="header_burger_icon_wrapper">
											<RewardsIcon />
										</div>
									</div>
									<span className="header_burger_section_item_title">Rewards</span>
								</div>
							</a>
							<a
								href="https://app.lanca.io/pools"
								target="_blank"
								rel="noopener noreferrer"
								className="header_burger_section_item_link"
							>
								<div className="header_burger_section_item">
									<div className="header_bruger_item_icon_container">
										<div className="header_burger_icon_wrapper">
											<LiquidityIcon />
										</div>
									</div>
									<span className="header_burger_section_item_title">Provide Liquidity</span>
								</div>
							</a>
						</div>
					</div>
					<div className="header_burger_section_divider" />
					<div className="header_burger_section">
						<div className="header_burger_section_items">
							<a
								href="https://app.lanca.io"
								target="_blank"
								rel="noopener noreferrer"
								className="header_burger_section_item_link"
							>
								<div className="header_burger_section_item">
									<div className="header_bruger_item_icon_container">
										<div className="header_burger_icon_wrapper">
											<BlogIcon />
										</div>
									</div>
									<span className="header_burger_section_item_title">Blog</span>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="header_burger_actions">
					<Button variant='primary' size='xl' isFull>Contact Us</Button>
                    <Button variant='secondary_color' size='xl' isFull>Open Testnet</Button>
				</div>
			</div>
		</div>
	)
}
