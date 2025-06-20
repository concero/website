import type { FC, ReactElement } from 'react'
import { Fragment } from 'react'
import { Chain } from '../common/Chain/Chain'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { Button } from '@concero/ui-kit'
import { ExpandIcon } from '@/assets/icons/expand'
import { useIsUltrawide } from '@/hooks/useMediaQuery'
import { useModalContext } from '@/reducer/modalContext'
import './Chains.pcss'

type ChainData = {
    name: string
    logo: string
}

export const Chains: FC = (): ReactElement => {
    const { dispatch } = useModalContext();
    const isMobile = useIsMobile()
    const isUltrwide = useIsUltrawide()
	const size = isUltrwide ? 'xl' : 'l'


    const openChainsModal = () => {
    dispatch({ type: 'OPEN_CHAINS' });
    };

    const defaultLeftChains: ChainData[] = [
        { name: 'Ethereum Sepolia', logo: '/Chains/ethereum.svg' },
        { name: 'Monad Testnet', logo: '/Chains/monad.svg' },
        { name: 'MegaETH Testnet', logo: '/Chains/megaeth.svg' },
        { name: 'Unichain Sepolia', logo: '/Chains/unichain.svg' },
        { name: 'Base Sepolia', logo: '/Chains/base.svg' },
        { name: 'Op Sepolia', logo: '/Chains/optimism.svg' },
    ]
    
    const otherChain = { name: 'Other chains', logo: '/Chains/Other.svg' }
    
    const leftChains = isMobile 
        ? [...defaultLeftChains, otherChain]
        : defaultLeftChains
    
    const rightChains: ChainData[] = isMobile 
        ? [
            { name: 'Soneium Minato', logo: '/Chains/soneium.svg' },
            { name: 'Sonic Blaze', logo: '/Chains/sonic.svg' },
            { name: 'Ink Sepolia', logo: '/Chains/ink.svg' },
            { name: 'BNB Chain Testnet', logo: '/Chains/bnb.svg' },
            { name: 'Arbitrum Sepolia', logo: '/Chains/arbitrum.svg' },
        ]
        : [
            { name: 'Soneium Minato', logo: '/Chains/soneium.svg' },
            { name: 'Sonic Blaze', logo: '/Chains/sonic.svg' },
            { name: 'Ink Sepolia', logo: '/Chains/ink.svg' },
            { name: 'BNB Chain Testnet', logo: '/Chains/bnb.svg' },
            { name: 'Arbitrum Sepolia', logo: '/Chains/arbitrum.svg' },
            { name: 'Other chains', logo: '/Chains/Other.svg' },
        ]

    const renderChains = (chains: ChainData[]): ReactElement[] =>
        chains.map((chain, index) => (
            <Fragment key={chain.name}>
                <Chain name={chain.name} logo={chain.logo} />
                {index !== chains.length  && <div className="chain_divider" />}
            </Fragment>
        ))

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
					<Button size={size} variant="secondary" rightIcon={<ExpandIcon />} onClick={openChainsModal}>
						Open Full List
					</Button>
				</div>
            </section>
        </>
    )
}