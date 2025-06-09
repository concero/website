import type { FC } from "react";
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { SwapIcon } from '@/assets/icons/swap'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import "./Burger.pcss"

export const Burger: FC = (): JSX.Element => {
    return (
        <div className="header_burger_container">
            <div className="header_burger">
                <div className="header_burger_content">
                    <div className="header_burger_section">
                        <span className="header_burger_section_title">For Developers</span>
                        <div className="header_burger_section_items">
                            <div className="header_burger_section_item">
                                <div className="header_bruger_item_icon_container">
                                    <DocumentationIcon />
                                </div>
                                <span className="header_burger_section_item_title">Documentation</span>
                            </div>
                            <div className="header_burger_section_item">
                                <div className="header_bruger_item_icon_container">
                                    <WhitepaperIcon />
                                </div>
                                <span className="header_burger_section_item_title">Whitepaper</span>
                            </div>
                            <div className="header_burger_section_divider"/>
                        </div>
                    </div>
                    <div className="header_burger_section">
                        <span className="header_burger_section_title">Ecosystem</span>
                        <div className="header_burger_section_items">
                            <div className="header_burger_section_item">
                                <div className="header_bruger_item_icon_container">
                                    <RewardsIcon />
                                </div>
                                <span className="header_burger_section_item_title">Rewards</span>
                            </div>
                             <div className="header_burger_section_item">
                                <div className="header_bruger_item_icon_container">
                                    <LiquidityIcon />
                                </div>
                                <span className="header_burger_section_item_title">Provide Liquidity</span>
                            </div>
                            <div className="header_burger_section_divider"/>
                        </div>
                    </div>
                </div>
                <div className="header_burger_actions">
                </div>
            </div>
        </div>
    )

}