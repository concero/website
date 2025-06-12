import type { FC, ReactElement } from 'react'
import { useState } from 'react'
import { Chain } from '../common/Chain/Chain'
import { Button } from '@concero/ui-kit'
import { ChainsModal } from '../common/ChainsModal/ChainsModal'
import { useIsUltrawide } from '@/hooks/useMediaQuery'
import { ExpandIcon } from '@/assets/icons/expand'
import './Chains.pcss'

type ChainData = {
	name: string
	logo: string
}

export const Chains: FC = (): ReactElement => {
	const isUltrwide = useIsUltrawide()
	const size = isUltrwide ? 'xl' : 'l'
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const leftChains: ChainData[] = [
		{ name: 'Ethereum Sepolia', logo: '/Chains/ethereum.svg' },
		{ name: 'Monad Testnet', logo: '/Chains/monad.svg' },
		{ name: 'MegaETH Testnet', logo: '/Chains/megaeth.svg' },
		{ name: 'Unichain Sepolia', logo: '/Chains/unichain.svg' },
		{ name: 'Base Sepolia', logo: '/Chains/base.svg' },
		{ name: 'Op Sepolia', logo: '/Chains/optimism.svg' },
	]

	const rightChains: ChainData[] = [
		{ name: 'Soneium Minato', logo: '/Chains/soneium.svg' },
		{ name: 'Sonic Blaze', logo: '/Chains/sonic.svg' },
		{ name: 'Ink Sepolia', logo: '/Chains/ink.svg' },
		{ name: 'BNB Chain Testnet', logo: '/Chains/bnb.svg' },
		{ name: 'Arbitrum Sepolia', logo: '/Chains/arbitrum.svg' },
		{ name: 'Polygon', logo: '/Chains/polygon.svg' },
	]

	const renderChains = (chains: ChainData[]): ReactElement[] =>
		chains.map((chain, index) => (
			<>
				<Chain key={chain.name} name={chain.name} logo={chain.logo} />
				{index !== chains.length && <div className="chain_divider" />}
			</>
		))

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<section className="chains">
				<span className="chains_title">
					Chains <span className="chains_number">100+</span>
				</span>
				<div className="chains_content">
					<div className="chains_content_left">{renderChains(leftChains)}</div>
					<div className="chains_content_right">{renderChains(rightChains)}</div>
				</div>
				<div className="chains_action">
					<Button size={size} variant="secondary" rightIcon={<ExpandIcon />} onClick={openModal}>
						Open Full List
					</Button>
				</div>
			</section>
			<ChainsModal isOpen={isModalOpen} onClose={closeModal} />
		</>
	)
}
