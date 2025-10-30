import type { FC, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import './ProtocolVisual.pcss'

type Icon = {
	src: string
	alt: string
	x: number
	y: number
	hoverX: number
	hoverY: number
}

const icons: Icon[] = [
	// Top row
	{ src: '/Target/first_visual.webp', alt: 'Cloud', x: -200, y: -97.5, hoverX: -280, hoverY: -140 },
	{ src: '/Target/second_visual.webp', alt: 'Lock', x: 0, y: -115, hoverX: 0, hoverY: -165 },
	{ src: '/Target/third_visual.webp', alt: 'Heart', x: 200, y: -97.5, hoverX: 280, hoverY: -140 },

	// Bottom row
	{ src: '/Target/fourth_visual.webp', alt: 'Shield', x: -200, y: 97.5, hoverX: -280, hoverY: 140 },
	{ src: '/Target/fifth_visual.webp', alt: 'Badge', x: 0, y: 115, hoverX: 0, hoverY: 165 },
	{ src: '/Target/sixth_visual.webp', alt: 'Cloud 2', x: 200, y: 97.5, hoverX: 280, hoverY: 140 },
]

const BASE_WIDTH = 856

export const ProtocolVisual: FC = (): ReactElement => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [scale, setScale] = useState(1)
	const [isHovered, setIsHovered] = useState(false)

	useLayoutEffect(() => {
		const updateScale = () => {
			if (containerRef.current) {
				const width = containerRef.current.clientWidth
				setScale(width / BASE_WIDTH)
			}
		}

		const resizeObserver = new ResizeObserver(entries => {
			for (const entry of entries) {
				const width = entry.contentRect.width
				setScale(width / BASE_WIDTH)
			}
		})

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current)
			updateScale()
		}

		return () => {
			resizeObserver.disconnect()
		}
	}, [])

	return (
		<div
			className="protocol_visual"
			ref={containerRef}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{icons.map((icon, index) => {
				return (
					<motion.div
						key={index}
						className="protocol_visual_icon"
						animate={{
							x: (isHovered ? icon.hoverX : icon.x) * scale,
							y: (isHovered ? icon.hoverY : icon.y) * scale,
							scale: scale,
						}}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 25,
							mass: 1,
						}}
						style={{
							zIndex: index,
						}}
					>
						<img src={icon.src} alt={icon.alt} className="protocol_visual_icon_image" />
					</motion.div>
				)
			})}
		</div>
	)
}
