import type { FC, ReactElement } from 'react'
import { ProductReachCard } from '@/components/common/ProductReachCard/ProductReachCard'
import { links } from '@/configuration/links'
import './Reach.pcss'

const PROTOCOLS = [
    {
        title: 'Chains',
        description: 'Connect your chain to the Lanca liquidity protocol',
        buttonText: 'Deployment Docs',
        buttonHref: links.documentation,
    },
    {
        title: 'Protocols',
        description: 'Enable cross-chain value transfer for your users.',
        buttonText: 'Integration Docs',
        buttonHref: links.documentation,
    },
    {
        title: 'Users',
        description: 'Bridge across thousands of chains in seconds.',
        buttonText: 'Lanca App',
        buttonHref: links.swap,
    },
] as const

export const Reach: FC = (): ReactElement => (
    <section className="lanca_reach">
        <span className="lanca_reach_title">Who is Lanca for?</span>
        <div className="lanca_reach_options">
            <div className="lanca_reach_protocols">
                {PROTOCOLS.map((protocol) => (
                    <ProductReachCard key={protocol.title} {...protocol} />
                ))}
            </div>
        </div>
    </section>
)
