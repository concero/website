import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { MessagingIcon } from '@/assets/icons/messaging'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { BlogIcon } from '@/assets/icons/blog'
import { BurgerSectionItem } from './BurgerItem/BurgerItem'
import { BurgerActions } from './BurgerActions/BurgerActions'
import { LancaAction } from '@/components/common/LancaAction/LancaAction'
import { SwapIcon } from '@/assets/icons/swap'
import { links } from '@/configuration/links'
import './Burger.pcss'


const burger_sections = [
    {
        title: 'For Developers',
        items: [
            { title: 'Documentation', href: links.documentation, icon: <DocumentationIcon /> },
            { title: 'Messaging Whitepaper', href: links.whitepaper, icon: <MessagingIcon color='#66767D'/> },
			{ title: 'Bridging Whitepaper', href: links.whitepaper, icon: <SwapIcon /> },
        ],
        showSpecialAction: false
    },
    {
        title: 'Ecosystem',
        items: [
            { title: 'Rewards', href: links.rewards, icon: <RewardsIcon /> },
            { title: 'Provide Liquidity', href: links.liquidity, icon: <LiquidityIcon /> },
        ],
        showSpecialAction: true
    },
    {
        title: null,
        items: [{ title: 'Blog', href: links.blog, icon: <BlogIcon /> }],
        showSpecialAction: false
    },
] as const

export const Burger = () => (
    <div className="burger_container">
        <div className="burger">
            <div className="burger_content">
                {burger_sections.map((section, idx) => (
                    <div key={section.title || idx} className="burger_section_wrapper">
                        <div className="burger_section">
                            {section.title && <span className="burger_section_title">{section.title}</span>}
                            <div className="burger_section_items">
                                {section.items.map(item => (
                                    <BurgerSectionItem
                                        key={item.title}
                                        title={item.title}
                                        href={item.href}
                                        icon={item.icon}
                                    />
                                ))}
                            </div>
                            {section.showSpecialAction && (
                                <div className="burger_special_action">
                                    <LancaAction size="small" />
                                </div>
                            )}
                        </div>
                        {idx < burger_sections.length - 1 && <div className="burger_section_divider" />}
                    </div>
                ))}
				<BurgerActions />
            </div>

        </div>
    </div>
)