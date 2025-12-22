import { useEffect } from 'react'
import { DocumentationIcon } from '@/assets/icons/documentation'
import { SearchIcon } from '@/assets/icons/search'
import { RewardsIcon } from '@/assets/icons/rewards'
import { DiscordDarkIcon } from '@/assets/icons/discordDark'
import { ConsoleIcon } from '@/assets/icons/console'
import { OverviewIcon } from '@/assets/icons/overview'
import { LiqudityProtocolIcon } from '@/assets/icons/liquidityProtocol'
import { DepoIcon } from '@/assets/icons/depo'
import { DistroIcon } from '@/assets/icons/distro'
import { BurgerSectionItem } from './BurgerItem/BurgerItem'
import { BurgerActions } from './BurgerActions/BurgerActions'
import { SocialActions } from '@/components/common/SocialActions/SocialActions'
import { links } from '@/configuration/links'
import { TTagVariant } from '@concero/ui-kit'
import './Burger.pcss'

type BurgerItem = {
	title: string
	href: string
	icon: React.ReactNode
	subtitle?: string
	showTag?: boolean
	tagText?: string
	tagVariant?: TTagVariant
	disabled?: boolean
}

type BurgerSection = {
	title: string | null
	items: BurgerItem[]
	showSocialActions?: boolean
}

const burgerSections: BurgerSection[] = [
	{
		title: 'Motherboard',
		items: [
			{
				title: 'Overview',
				href: links.overview,
				subtitle: 'Design, actors and specs',
				icon: <OverviewIcon />,
			},
			{
				title: 'Scan',
				href: links.scan,
				subtitle: 'Track transactions',
				icon: <SearchIcon />,
			},
			{
				title: 'Console',
				href: links.scan,
				subtitle: 'Observability and onboarding',
				icon: <ConsoleIcon />,
				showTag: true,
				tagText: 'Soon',
				tagVariant: 'neutral',
				disabled: true,
			},
			{
				title: 'Documentation',
				href: links.documentation,
				subtitle: 'Technical guides for developers',
				icon: <DocumentationIcon />,
			},
		],
	},
	{
		title: 'Products',
		items: [
			{
				title: 'Lanca',
				href: links.lanca,
				subtitle: 'Cross-chain liquidity protocol',
				icon: <LiqudityProtocolIcon />,
			},
			{
				title: 'Depo',
				href: links.depo,
				subtitle: 'Deposit/Withdrawal protocol',
				icon: <DepoIcon />,
				disabled: true,
				showTag: true,
				tagText: 'Soon',
				tagVariant: 'neutral',
			},
			{
				title: 'Distro',
				href: links.distro,
				subtitle: 'Token distribution protocol',
				icon: <DistroIcon />,
				disabled: true,
				showTag: true,
				tagText: 'Soon',
				tagVariant: 'neutral',
			},
		],
	},
	{
		title: 'Community',
		showSocialActions: true,
		items: [
			{
				title: 'Community Portal',
				href: links.rewards,
				subtitle: 'Rewards and testing hub',
				icon: <RewardsIcon />,
			},
			{
				title: 'Developer Community',
				href: links.discord,
				subtitle: 'Chat with other developers',
				icon: <DiscordDarkIcon />,
			},
		],
	},
]

export const Burger = () => {
	useEffect(() => {
		const originalOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [])

	return (
		<div className="burger_container">
			<div className="burger">
				<div className="burger_content">
					{burgerSections.map((section, idx) => (
						<div key={section.title || idx} className="burger_section_wrapper">
							<div className="burger_section">
								{section.title && <span className="burger_section_title">{section.title}</span>}
								<div className="burger_section_items">
									{section.items.map(item => {
										return (
											<BurgerSectionItem
												key={item.title}
												title={item.title}
												href={item.href}
												icon={item.icon}
												subtitle={item.subtitle}
												showTag={item.showTag}
												tagText={item.tagText}
												tagVariant={item.tagVariant}
												disabled={item.disabled}
											/>
										)
									})}
								</div>
								{section.showSocialActions && <SocialActions centered={false} />}
							</div>
							{idx < burgerSections.length - 1 && <div className="burger_section_divider" />}
						</div>
					))}
					<BurgerActions />
				</div>
			</div>
		</div>
	)
}
