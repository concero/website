import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import { Tag } from '@concero/ui-kit'
import { AnimatePresence, motion } from 'framer-motion'
import { useWordAnimation } from '@/hooks/useWordAnimation'
import { CodeBlock } from '../common/CodeBlock/CodeBlock'
import './Setup.pcss'

const keywords = [
	{ word: 'Speed', duration: 4000 },
	{ word: 'Security', duration: 4000 },
	{ word: 'Cost', duration: 4000 },
	{ word: 'Compliance', duration: 6000 },
	{ word: 'Deliverability', duration: 6000 },
	{ word: 'Sovereignty', duration: 4000 },
] as const

export const Setup: FC = memo((): ReactElement => {
	const { currentWord, currentIndex } = useWordAnimation({
		words: keywords,
		fadeDuration: 300,
		autoStart: true,
		loop: true,
	})

	return (
		<section className="setup">
			<div className="setup_content">
				<Tag variant="neutral" size="m">
					Interoperability According to You
				</Tag>
				<div className="setup_description">
					<h2 className="setup_title">
						Optimise your stack for{' '}
						<span className="setup_keyword_wrapper">
							<AnimatePresence mode="wait">
								<motion.span
									key={currentIndex}
									className="setup_keyword"
									initial={{ x: 20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -20, opacity: 0 }}
									transition={{
										duration: 0.3,
										ease: 'linear',
									}}
								>
									{currentWord}
								</motion.span>
							</AnimatePresence>
						</span>
					</h2>
					<p className="setup_subtitle">
						Configure your setup to fit your needs in seconds by adjusting just a few variables.
					</p>
				</div>
			</div>
			<div className="setup_info">
				<CodeBlock currentIndex={currentIndex} />
			</div>
		</section>
	)
})
