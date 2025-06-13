import type { FC } from 'react'
import { NavigationWidget } from '@/components/common/NavigationWidget/NavifgationWidget'
import { links } from '@/configuration/links'
import './Developers.pcss'

const developer_links = [
	{ title: 'Documentation', link: links.documentation },
	{ title: 'Messaging Whitepaper', link: links.whitepaper },
	{ title: 'Bridging Framework', link: links.whitepaper },
] as const

export const Developers: FC = (): JSX.Element => (
	<div className="developer_section">
		<span className="developer_title">For Developers</span>
		<div className="developer_links">
			{developer_links.map(({ title, link }) => (
				<NavigationWidget key={title} title={title} link={link} />
			))}
		</div>
	</div>
)
