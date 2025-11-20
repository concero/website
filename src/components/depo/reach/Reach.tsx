import type { FC, ReactElement } from 'react'
import { ProductReachCard } from '@/components/common/ProductReachCard/ProductReachCard'
import { links } from '@/configuration/links'
import './Reach.pcss'

const PROTOCOLS = [
    {
        title: 'Prediction Markets',
        buttonText: 'Deployment Docs',
        buttonHref: links.documentation,
    },
    {
        title: 'Margin Venues',
        buttonText: 'Integration Docs',
        buttonHref: links.documentation,
    },
    {
        title: 'Any app',
        buttonText: 'Lanca App',
        buttonHref: links.swap,
    },
] as const


export const Reach: FC = (): ReactElement => (
    <section className="depo_reach">
        <span className="depo_reach_title">Who is Depo for?</span>
        <div className="depo_reach_options">
            <div className="depo_reach_protocols">
                {PROTOCOLS.map(protocol => (
                    <ProductReachCard key={protocol.title} {...protocol} />
                ))}
            </div>
        </div>
    </section>
)
