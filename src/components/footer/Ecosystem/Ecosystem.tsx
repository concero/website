import type { FC } from 'react'
import { links } from '@/configuration/links'
import { useModalContext } from '@/reducer/modal/modalContext'
import './Ecosystem.pcss'

const ecosystem_sections = [
	{
		title: 'Motherboard',
		links: [
			{ href: links.overview, label: 'Overview' },
			{ href: links.scan, label: 'Scan' },
			{ href: links.documentation, label: 'Documentation' },
		],
	},
	{
		title: 'Products',
		links: [
			{ href: links.lanca, label: 'Lanca' },
			{ href: links.depo, label: 'Depo' },
			{ href: links.distro, label: 'Distro' },
		],
	},
	{
		title: 'Community',
		links: [
			{ href: links.rewards, label: 'Rewards Portal' },
			{ href: links.discord, label: 'Developer Community' },
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
	const { dispatch } = useModalContext()

	const handleLinkClick = (href: string) => {
		if (href === 'brand-assets') {
			dispatch({ type: 'OPEN_BRAND_ASSETS' })
		} else {
			const isExternal = href && !href.startsWith('/') && !href.startsWith(window.location.origin)

			if (isExternal) {
				window.open(href, '_blank', 'noopener,noreferrer')
			} else {
				window.location.href = href
			}
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
		</div>
	)
}
