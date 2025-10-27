import type { FC, ReactElement } from 'react'
import { memo } from 'react'
import './Vision.pcss'

export const Vision: FC = memo((): ReactElement => {
	return (
		<section className="vision">
			<h2 className="vision_title">"Concero is the missing link to enabling the app-chain future"</h2>
			<img src="/Vision/Vision.svg" alt="Vision Illustration" className="vision_visual" loading="lazy" />
		</section>
	)
})
