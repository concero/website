import type { FC, ReactElement } from 'react'
import { FAQ as FAQComponent } from '@/components/common/FAQ/FAQ'
import './FAQ.pcss'

const FAQ_DATA = [
	{
		question: 'What does Motherboard do? ',
		answer: 'Motherboard is an interoperability framework that enables communication between chains. You are able to send a message (data/instructions) from one chain to another.',
	},
	{
		question: 'How is Motherboard different to interoperability protocols? ',
		answer: 'Interoperability protocols run their own networks in order to pass messages. Your distribution is defined by said network and you have to inherit their pre-defined attributes. Motherboard allows you to define your own ‘interoperability protocol’ which you can optimise for what matters to you. Modules are chain-agnostic and if we do not support a chain that you would like to be on you are able to integrate it permissinolessly in under 20 minutes for a price of a coffee.',
	},
	{
		question: 'How is Motherboard modular?',
		answer: 'You specify individual modules within the transaction itself. This means that you are never vendor-locked to a specific service provider. You are able to switch a module or the entire stack in accordance to individual transaction requirements. ',
	},
	{
		question: 'What can I build with Motherboard? ',
		answer: 'Cross-chain protocols. Where an event on one chain triggers an event on another chain.',
	},
	{
		question: 'What are the fees? ',
		answer: 'Motherboard does not charge additional fees. Transaction cost is determined by the modules that you choose. ',
	},
	{
		question: 'Is Motherboard permissionless?',
		answer: 'Anyone can deploy Motherboard to a new chain permissinolessly in under 20 minutes. Any Relayer network, Verifier network or RPC provider can connect to the motherboard permissinolessly. ',
	},
] as const

export const FAQ: FC = (): ReactElement => {
	return (
		<div className="overview_faq">
			<span className="overview_faq_title">FAQ</span>
			<FAQComponent data={FAQ_DATA} />
		</div>
	)
}
