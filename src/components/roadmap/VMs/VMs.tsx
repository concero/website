import type { FC } from 'react'
import './VMs.pcss'

export const VMs: FC = (): JSX.Element => {
	return (
		<div className="vms">
			<div className="vms_description_container">
				<div className="vms_title_container">
					<span className="vms_title">Alt-VMs</span>
					<span className="vms_index">01</span>
				</div>
				<span className="vms_subtitle">Support for SVM, Starknet, Cosmos, Sui, Aptos</span>
			</div>
			<div className="vms_content_container">
				<div className="vm_logo_container">
					<img src="/Roadmap/Solana.svg" alt="Solana" className="vm_logo" />
				</div>
				<div className="vm_logo_container">
					<img src="/Roadmap/Starknet.svg" alt="Starknet" className="vm_logo" />
				</div>
				<div className="vm_logo_container">
					<img src="/Roadmap/Cosmos.svg" alt="Cosmos" className="vm_logo" />
				</div>
				<div className="vm_logo_container">
					<img src="/Roadmap/Aptos.svg" alt="Aptos" className="vm_logo" />
				</div>
			</div>
			<div className='vms_divider'/>
		</div>
	)
}
