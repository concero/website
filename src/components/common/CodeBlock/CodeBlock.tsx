import type { FC } from 'react'
import { motion } from 'framer-motion'
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

	return <div className="code_block">{renderCodeBlock()}</div>
}
