import type { FC } from 'react'
import { InfoWidget } from '../common/InfoWidget/InfoWidget'
import { LiquidityRequirementIcon } from '@/assets/icons/liquidityReq'
import { CostIcon } from '@/assets/icons/cost'
import { TimeIcon } from '@/assets/icons/time'
import { ShowcaseWidget } from '../common/ShowcaseWidget/ShowcaseWidget'
import { MessagingIcon } from '@/assets/icons/messaging'
import { BridgeIcon } from '@/assets/icons/bridge'
import { links } from '@/configuration/links'
import { useModalContext } from '@/reducer/modalContext'
import './WhyUs.pcss'

export const WhyUs: FC = (): JSX.Element => {
    const { dispatch } = useModalContext()
    
    const handleOpenContactModal = () => {
        dispatch({ type: 'OPEN_CONTACT' })
    }
    
    return (
        <section className="why_us">
            <span className="why_us_title">Why us?</span>
            <div className="why_us_content">
                <div className="why_us_info">
                    <div className="why_us_info_left">
                        <InfoWidget title="Integration Time" subtitle="<20min" icon={<TimeIcon />} />
                        <InfoWidget title="Integration Cost" subtitle="$0" icon={<CostIcon />} />
                    </div>
                    <div className="why_us_info_right">
                        <InfoWidget
                            title="Liquidity Requirements"
                            subtitle="99.5% less than industry standard "
                            icon={<LiquidityRequirementIcon />}
                        />
                    </div>
                </div>
                <div className="why_us_showcase">
                    <ShowcaseWidget
                        title="Messaging"
                        subtitle="Sending information/instructions from one chain to another."
                        video="/WhyUs/Messaging.mp4"
                        icon={<MessagingIcon />}
                        integrationAction={handleOpenContactModal}
                        documentationLink={links.whitepaper}
                    />
                    <ShowcaseWidget
                        title="Bridging"
                        subtitle="Sending assets from one chain to another."
                        video="/WhyUs/Bridging.mp4"
                        icon={<BridgeIcon />}
                        integrationAction={handleOpenContactModal}
                        documentationLink={links.lanca_whitepaper}
                    />
                </div>
            </div>
        </section>
    )
}