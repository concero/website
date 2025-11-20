import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { Button } from '@concero/ui-kit'
import './Hero.pcss'


const HeroDescription: FC = memo(() => (
    <div className="depo_hero_description">
        <div className="depo_hero_title_container">
            <span className="depo_hero_title">Depo</span>
            <span className="depo_hero_title depo_hero_title_gray">Deposit and withdrawal protocol</span>
        </div>
        <span className="depo_hero_subtitle">Accept deposits from and pay out withdrawals to thousands of chains</span>
    </div>
))


const HeroActions: FC = memo(() => (
    <div className="depo_hero_actions">
        <Button variant="primary" size="xl" className="depo_hero_action">
            Start Building
        </Button>
        <Button variant="secondary" size="xl" className="depo_hero_action">
            Contact Us
        </Button>
    </div>
))


export const Hero: FC = (): ReactElement => (
    <section className="depo_hero">
        <div className="depo_hero_container">
            <div className="depo_hero_content">
                <div className="depo_image_container">
                    <img src="/Overview/Hero/Background.png" alt="Hero Background" className="depo_hero_image" />
                </div>
                <HeroDescription />
                <HeroActions />
            </div>
        </div>
    </section>
)
