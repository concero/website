import type { FC, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import './AssetVisual.pcss'

type Flower = {
	src: string
	alt: string
	x: number
	y: number
	hoverX: number
	rotation: number
}

const flowers: Flower[] = [
	{
		src: '/Target/seventh_visual.svg',
		alt: 'Flower 1',
		x: -170,
		y: -60,
		hoverX: -220,
		rotation: -15,
	},
	{
		src: '/Target/eight_visual.svg',
		alt: 'Flower 2',
		x: 170,
		y: 80,
		hoverX: 220,
		rotation: 15,
	},
]

const BASE_WIDTH = 856

export const AssetVisual: FC = (): ReactElement => {
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
			className="asset_visual"
			ref={containerRef}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{flowers.map((flower, index) => {
				return (
					<motion.div
						key={index}
						className="asset_visual_flower"
						animate={{
							x: (isHovered ? flower.hoverX : flower.x) * scale,
							y: flower.y * scale,
							scale: scale,
							rotate: isHovered ? 0 : flower.rotation,
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
						<img src={flower.src} alt={flower.alt} className="asset_visual_flower_image" />
					</motion.div>
				)
			})}
		</div>
	)
}
