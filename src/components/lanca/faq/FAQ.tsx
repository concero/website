import type { FC, ReactElement } from 'react'
import { FAQ as FAQComponent } from '@/components/common/FAQ/FAQ'
import './FAQ.pcss'

const FAQ_DATA = [
	{
		question: 'What is Lanca and how does it work?',
		answer: 'Lanca is a cross-chain liquidity protocol built on a parent–child pool model, where liquidity is allocated across multiple chains and rebalanced between pools to support value movement at scale.',
	},
	{
		question: 'What makes Lanca capital-efficient?',
		answer: 'Lanca achieves capital efficiency through frequent liquidity rebalancing. A relatively small amount of liquidity is reused across pools every few minutes, enabling high throughput while both liquidity providers and rebalancers earn yield.',
	},
	{
		question: 'Which chains does Lanca support?',
		answer: 'Lanca supports hundreds of chains supported by Concero messaging, with new networks added through a standardized and scalable integration process.',
	},
	{
		question: 'Can other protocols integrate Lanca?',
		answer: 'Yes. Lanca is designed as an integration-first protocol and can be embedded into other protocols to enable cross-chain transfers and liquidity rebalancing for their users.',
	},
] as const

export const FAQ: FC = (): ReactElement => {
	return (
		<div className="lanca_faq">
			<span className="lanca_faq_title">FAQ</span>
			<FAQComponent data={FAQ_DATA} />
		</div>
	)
}
