import type { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Speed } from './Speed/Speed'
import { Cost } from './Cost/Cost'
import { Compliance } from './Compliance/Compliance'
import { Deliverability } from './Deliverability/Deliverability'
import { Sovereignty } from './Sovereignty/Sovereignty'
import { Security } from './Security/Security'
import './CodeBlock.pcss'

type CodeBlockProps = {
	currentIndex: number
}

export const CodeBlock: FC<CodeBlockProps> = ({ currentIndex }) => {
	const renderCodeBlock = () => {
		switch (currentIndex) {
			case 0:
				return <Speed />
			case 1:
				return <Security />
			case 2:
				return <Cost />
			case 3:
				return <Compliance />
			case 4:
				return <Deliverability />
			case 5:
				return <Sovereignty />
			default:
				return null
		}
	}

	return (
		<div className="code_block">
			<AnimatePresence mode="wait">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="code_block_pre"
					transition={{
						duration: 0.4,
						ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
					}}
				>
					{renderCodeBlock()}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
