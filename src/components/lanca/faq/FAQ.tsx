import type { FC, ReactElement } from 'react'
import { FAQ as FAQComponent } from '@/components/common/FAQ/FAQ'
import './FAQ.pcss'

const FAQ_DATA = [
	{
		question: 'Lorem ipsum dolor sit amet consectetur?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
	},
	{
		question: 'Consectetur adipiscing elit sed do eiusmod?',
		answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		question: 'Sed do eiusmod tempor incididunt ut labore?',
		answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
	},
	{
		question: 'Ut enim ad minim veniam quis nostrud?',
		answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
	},
	{
		question: 'Quis nostrud exercitation ullamco laboris nisi?',
		answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
	},
	{
		question: 'Excepteur sint occaecat cupidatat non proident?',
		answer: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.',
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
