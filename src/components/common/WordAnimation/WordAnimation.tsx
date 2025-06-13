import React, { useEffect, useRef, useState } from 'react'
import './WordAnimation.pcss'

const WORDS = ['scalable', 'decentralised', 'modular', 'capital efficient', 'secure'] as const

export const AnimatedWords: React.FC = () => {
	const [index, setIndex] = useState(0)
	const [fade, setFade] = useState(false)
	const timeoutRef = useRef<number | null>(null)

	useEffect(() => {
		setFade(true)
		timeoutRef.current = window.setTimeout(() => {
			setFade(false)
			timeoutRef.current = window.setTimeout(() => {
				setIndex(prev => (prev + 1) % WORDS.length)
			}, 400)
		}, 3000)
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
		}
	}, [index])

	return (
		<span className={`concero_color hero_animated_word${fade ? ' fade-in' : ' fade-out'}`} aria-live="polite">
			{WORDS[index]}
		</span>
	)
}
