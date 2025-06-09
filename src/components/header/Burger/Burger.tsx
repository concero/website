import type { FC } from 'react'
import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { BlogIcon } from '@/assets/icons/blog'
import { BurgerSectionItem } from './BurgerItem/BurgerItem'
import { BurgerActions } from './BurgerActions/BurgerActions'
import './Burger.pcss'

export const Burger: FC = (): JSX.Element => {
    return (
        <div className="header_burger_container">
            <div className="header_burger">
                <div className="header_burger_content">
                    <div className="header_burger_section">
                        <span className="header_burger_section_title">For Developers</span>
                        <div className="header_burger_section_items">
                            <BurgerSectionItem
                                title="Documentation"
                                href="https://docs.concero.io/"
                                icon={<DocumentationIcon />}
                            />
                            <BurgerSectionItem
                                title="Whitepaper"
                                href="https://concero.io/v2_whitepaper.pdf"
                                icon={<WhitepaperIcon />}
                            />
                        </div>
                    </div>
                    <div className="header_burger_section_divider" />
                    <div className="header_burger_section">
                        <span className="header_burger_section_title">Ecosystem</span>
                        <div className="header_burger_section_items">
                            <BurgerSectionItem
                                title="Rewards"
                                href="https://app.concero.io/rewards"
                                icon={<RewardsIcon />}
                            />
                            <BurgerSectionItem
                                title="Provide Liquidity"
                                href="https://app.lanca.io/pools"
                                icon={<LiquidityIcon />}
                            />
                        </div>
                    </div>
                    <div className="header_burger_section_divider" />
                    <div className="header_burger_section">
                        <div className="header_burger_section_items">
                            <BurgerSectionItem
                                title="Blog"
                                href="https://app.lanca.io"
                                icon={<BlogIcon />}
                            />
                        </div>
                    </div>
                </div>
                <BurgerActions />
            </div>
        </div>
    )
}