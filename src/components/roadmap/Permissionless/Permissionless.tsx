import type { FC } from 'react'
import './Permissionless.pcss'

export const Permissionless: FC = (): JSX.Element => {
	return (
		<div className="permissionless">
			<div className="permissionless_description_container">
				<div className="permissionless_title_container">
					<span className="permissionless_title">Permissionless Deployment</span>
					<span className="permissionless_index">02</span>
				</div>
				<span className="permissionless_subtitle">Permissionlessly deploy Concero into any chain</span>
			</div>
			<div className="permissionless_content_container">
				<div className="permissionless_illustration_container">
					<img
						src="/Roadmap/Permissionless.svg"
						alt="Permissionless Deployment"
						className="permissionless_illustration"
					/>
				</div>
			</div>
		</div>
	)
}
