import type { FC, ReactElement } from 'react'
import { Chain } from '../common/Chain/Chain'
import { useIsMobile } from '@/hooks/useMediaQuery'
import './Chains.pcss'
import { Fragment } from 'react'

type ChainData = {
    name: string
    logo: string
}

export const Chains: FC = (): ReactElement => {
    const isMobile = useIsMobile()

    const defaultLeftChains: ChainData[] = [
        { name: 'Ethereum Sepolia', logo: '/Chains/ethereum.svg' },
        { name: 'Monad Testnet', logo: '/Chains/monad.svg' },
        { name: 'MegaETH Testnet', logo: '/Chains/megaeth.svg' },
        { name: 'Unichain Sepolia', logo: '/Chains/unichain.svg' },
        { name: 'Base Sepolia', logo: '/Chains/base.svg' },
        { name: 'Op Sepolia', logo: '/Chains/optimism.svg' },
    ]
    
    const otherChain = { name: 'Other chains', logo: '/Chains/Other.svg' }
    
    // Add "Other chains" to left side for mobile view
    const leftChains = isMobile 
        ? [...defaultLeftChains, otherChain]
        : defaultLeftChains
    
    // Remove "Other chains" from right side for mobile view
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
            </section>
        </>
    )
}