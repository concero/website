import type { FC } from 'react'
import { Tag } from '@concero/ui-kit'
import './SecurityPartner.pcss'

type SecurityPartnerProps = {
	title: string
	subtitle: string
	logo: string
	tags: string[]
	link: string
}

export const SecurityPartner: FC<SecurityPartnerProps> = ({ title, subtitle, logo, tags, link }): JSX.Element => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" className="security_partner_link">
			<div className="security_partner">
				<div className="security_partner_tags">
					{tags.map((tag, index) => (
						<Tag key={`${tag}-${index}`} variant="neutral" size="s">
							{tag}
						</Tag>
					))}
				</div>
				<div className="security_partner_logo_container">
					<img src={logo} alt="Partner Logo" className="security_partner_logo" />
				</div>
				<div className="security_partner_description">
					<span className="security_partner_title">{title}</span>
					<span className="security_partner_subtitle">{subtitle}</span>
				</div>
			</div>
		</a>
	)
}
