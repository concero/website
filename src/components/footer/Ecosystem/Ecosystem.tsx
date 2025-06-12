import { useState } from 'react'
import type { FC } from 'react'
import { links } from '@/configuration/links'
import { BrandModal } from '@/components/common/BrandModal/BrandModal'
import './Ecosystem.pcss'

const ecosystem_sections = [
	{
		title: 'Ecosystem',
		links: [
			{ href: links.rewards, label: 'Rewards Portal' },
			{ href: links.liquidity, label: 'Provide Liquidity' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ href: links.blog, label: 'Blog' },
			{ href: 'brand-assets', label: 'Brand Assets' },
		],
	},
] as const

export const Ecosystem: FC = (): JSX.Element => {
	const [isBrandModalOpen, setBrandModalOpen] = useState(false)

	const handleLinkClick = (href: string) => {
		if (href === 'brand-assets') {
			setBrandModalOpen(true)
		} else {
			window.open(href, '_blank', 'noopener,noreferrer')
		}
	}

	return (
		<div className="ecosystem_wrapper">
			{ecosystem_sections.map(section => (
				<div className="ecosystem_section" key={section.title}>
					<div className="ecosystem_title">{section.title}</div>
					<div className="ecosystem_links">
						{section.links.map(link => (
							<a
								key={link.href}
								href="#"
								className="ecosystem_link"
								onClick={e => {
									e.preventDefault()
									handleLinkClick(link.href)
								}}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			))}
			<BrandModal isOpen={isBrandModalOpen} onClose={() => setBrandModalOpen(false)} />
		</div>
	)
}
