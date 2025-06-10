import { LiquidityIcon } from '@/assets/icons/liquidity'
import { RewardsIcon } from '@/assets/icons/rewards'
import { WhitepaperIcon } from '@/assets/icons/whitepaper'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { BlogIcon } from '@/assets/icons/blog'
import { BurgerSectionItem } from './BurgerItem/BurgerItem'
import { BurgerActions } from './BurgerActions/BurgerActions'
import { links } from '@/configuration/links'
import './Burger.pcss'

const burger_sections = [
	{
		title: 'For Developers',
		items: [
			{ title: 'Documentation', href: links.documentation, icon: <DocumentationIcon /> },
			{ title: 'Whitepaper', href: links.whitepaper, icon: <WhitepaperIcon /> },
		],
	},
	{
		title: 'Ecosystem',
		items: [
			{ title: 'Rewards', href: links.rewards, icon: <RewardsIcon /> },
			{ title: 'Provide Liquidity', href: links.liquidity, icon: <LiquidityIcon /> },
		],
	},
	{
		title: null,
		items: [{ title: 'Blog', href: links.blog, icon: <BlogIcon /> }],
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
						</div>
						{idx < burger_sections.length - 1 && <div className="burger_section_divider" />}
					</div>
				))}
			</div>
			<BurgerActions />
		</div>
	</div>
)
