import type { FC, ReactElement } from 'react'
import { FAQ as FAQComponent } from '@/components/common/FAQ/FAQ'
import './FAQ.pcss'

const FAQ_DATA = [
	{
		question: 'Who is Concero for?',
		answer: 'Concero is for applications and AppChains that require user deposits (perp. DEXes, prediction markets, etc.). Make your application feel native to all chains by enabling users to deposit from all major chains from day 1.',
	},
	{
		question: 'Where does the revenue go?',
		answer: 'All generated yield belongs to you and your application. What you decide to do with it is completely up to you.',
	},
	{
		question: 'Is it EVM only?',
		answer: 'For now - yes. Concero will support new VMs very soon. Powered by the Motherboard, we are able to expand to new chains and VMs quickly.',
	},
	{
		question: 'How much does it cost?',
		answer: 'There are no integration fees, transaction fees or subscription fees. We generate revenue by retaining a small portion of the yield generated. Our incentives are fully aligned with yours. If there is no yield - there is no fee.',
	},
	{
		question: 'How long does it take to set up?',
		answer: 'Set up takes less than 24 hours. We need about an hour of your time to get all of the information to set everything up for you. From there, you are able to control and monitor everything through a simple dashboard.',
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
