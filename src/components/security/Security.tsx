import type { FC } from 'react'
import { SecurityPartner } from '../common/SecurityPartner/SecurityPartner'
import './Security.pcss'

export const Security: FC = (): JSX.Element => {
	return (
		<section className="security">
			<span className="security_title">Security Partners</span>
			<div className="security_content">
				<SecurityPartner
					title="Chainlink"
					subtitle="Cryptographic security"
					tags={['Infrastructure', 'Relayer', 'Settlement']}
					logo="/Security/Chainlink.png"
                    link='https://chain.link/'
				/>
				<SecurityPartner
					title="Symbiotic"
					subtitle="Economic security"
					tags={['Infrastructure', 'Relayer']}
					logo="/Security/Symbiotic.png"
                    link='https://symbiotic.fi/'
				/>
			</div>
		</section>
	)
}
