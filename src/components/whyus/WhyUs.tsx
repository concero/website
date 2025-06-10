import type { FC } from 'react'
import { InfoWidget } from '../common/InfoWidget/InfoWidget'
import { LiquidityRequirementIcon } from '@/assets/icons/liquidityReq'
import { CostIcon } from '@/assets/icons/cost'
import { TimeIcon } from '@/assets/icons/time'
import './WhyUs.pcss'

export const WhyUs: FC = (): JSX.Element => {
	return (
		<section className="why_us">
			<span className="why_us_title">Why us?</span>
			<div className="why_us_content">
				<div className="why_us_info">
					<div className='why_us_info_left'>
						<InfoWidget
							title='Integration Time'
							subtitle='<20min'
							icon={<TimeIcon />}
						/>
						<InfoWidget
							title='Integration Cost'
							subtitle='$0'
							icon={<CostIcon />}
						/>

					</div>
					<div className='why_us_info_right'>
						<InfoWidget
							title='Liquidity Requirements'
							subtitle='99.5% less than industry standard '
							icon={<LiquidityRequirementIcon/>}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
