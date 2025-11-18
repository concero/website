import type { FC, ReactElement } from 'react'
import { InfraCard } from '@/components/common/InfraCard/InfraCard'
import { links } from '@/configuration/links'
import './Build.pcss'

const INFRA_CARDS = [
    { 
        title: 'Become a liquidity provider', 
        buttonText: 'Provide Liquidity', 
        buttonLink: links.liquidity 
    },
    { 
        title: 'Become a rebalancer', 
        buttonText: 'Rebalancer Docs', 
        buttonLink: links.documentation
    },
    { 
        title: 'Bridge Liquidity', 
        buttonText: 'Open App', 
        buttonLink: links.swap
    },
] as const

export const Build: FC = (): ReactElement => (
    <div className="lanca_build">
        <div className="lanca_build_description">
            <div className="lanca_build_description_heading">
                <span className="lanca_build_description_title">Build with us</span>
            </div>
        </div>
        <div className="lanca_build_card">
            {INFRA_CARDS.map(({ title, buttonText, buttonLink }) => (
                <InfraCard 
                    key={title} 
                    title={title} 
                    buttonText={buttonText} 
                    buttonLink={buttonLink} 
                />
            ))}
        </div>
    </div>
)
