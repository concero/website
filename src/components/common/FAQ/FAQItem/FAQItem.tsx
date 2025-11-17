import type { FC, ReactElement } from 'react'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tag } from '@concero/ui-kit'
import { OpenTrail } from '@/assets/icons/openTrail'
import { CloseTrail } from '@/assets/icons/closeTrail'
import './FAQItem.pcss'

type FAQItemProps = {
	question: string
	answer: string
}

export const FAQItem: FC<FAQItemProps> = ({ question, answer }): ReactElement => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleToggle = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	return (
		<div className="faq_item">
			<div className="faq_question" onClick={handleToggle}>
				<span className="faq_question_text">{question}</span>
				<Tag variant="neutral" size="s">
					{isOpen ? <CloseTrail /> : <OpenTrail />}
				</Tag>
			</div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						className="faq_answer"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							height: { type: 'spring', damping: 20, stiffness: 150 },
							opacity: { duration: 0.2, ease: 'easeInOut' },
						}}
					>
						<span className="faq_answer_text">{answer}</span>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
