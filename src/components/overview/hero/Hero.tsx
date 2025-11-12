import type { FC, ReactElement } from 'react'
import { useMemo } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'

const HeroDescription: FC = () => (
    <div className="overview_hero_description">
        <div className='overview_hero_title_container'>
            <span className="overview_hero_title">Motherboard</span>
            <span className="overview_hero_title overview_hero_title_gray">Open Interoperability Framework</span>
        </div>
        <span className="overview_hero_subtitle">Make infrastructure work for you</span>
    </div>
)


const HeroActions: FC = () => (
    <div className="overview_hero_actions">
        <Button variant="primary" size="xl" className="overview_hero_action">
            Connect
        </Button>
        <Button variant="secondary" size="xl" className="overview_hero_action">
            Contact Us
        </Button>
    </div>
)


export const Hero: FC = (): ReactElement => {
    const description = useMemo(() => <HeroDescription />, [])
    const actions = useMemo(() => <HeroActions />, [])


    return (
        <section className="overview_hero">
            <div className="overview_hero_container">
                <div className="overview_hero_content">
                    {description}
                    {actions}
                </div>
            </div>
        </section>
    )
}
