import { useCallback, useEffect, useRef, useState } from 'react'

type WordConfig = {
	word: string
	duration: number
}

type Options = {
	words: readonly WordConfig[]
	fadeDuration?: number
	autoStart?: boolean
	loop?: boolean
}

type UseAnimatedWordsReturn = {
	currentWord: string
	currentIndex: number
	isFading: boolean
	isComplete: boolean
	pause: () => void
	resume: () => void
	reset: () => void
	next: () => void
	previous: () => void
}

export const useWordAnimation = ({
	words,
	fadeDuration = 300,
	autoStart = true,
	loop = true,
}: Options): UseAnimatedWordsReturn => {
	const [index, setIndex] = useState(0)
	const [isFading, setIsFading] = useState(false)
	const [isPaused, setIsPaused] = useState(!autoStart)
	const [isComplete, setIsComplete] = useState(false)

	const displayTimeoutRef = useRef<number | null>(null)
	const fadeTimeoutRef = useRef<number | null>(null)

	const clearTimeouts = useCallback(() => {
		if (displayTimeoutRef.current !== null) {
			clearTimeout(displayTimeoutRef.current)
			displayTimeoutRef.current = null
		}
		if (fadeTimeoutRef.current !== null) {
			clearTimeout(fadeTimeoutRef.current)
			fadeTimeoutRef.current = null
		}
	}, [])

	const goToNext = useCallback(() => {
		const nextIndex = (index + 1) % words.length

		if (!loop && nextIndex === 0) {
			setIsComplete(true)
			setIsPaused(true)
			return
		}

		setIndex(nextIndex)
	}, [index, words.length, loop])

	const goToPrevious = useCallback(() => {
		setIndex(prev => (prev - 1 + words.length) % words.length)
		setIsComplete(false)
	}, [words.length])

	const pause = useCallback(() => {
		setIsPaused(true)
		clearTimeouts()
	}, [clearTimeouts])

	const resume = useCallback(() => {
		setIsPaused(false)
		setIsComplete(false)
	}, [])

	const reset = useCallback(() => {
		clearTimeouts()
		setIndex(0)
		setIsFading(false)
		setIsPaused(!autoStart)
		setIsComplete(false)
	}, [autoStart, clearTimeouts])

	useEffect(() => {
		if (isPaused || isComplete || words.length === 0) return

		setIsFading(true)

		const currentDuration = words[index].duration

		displayTimeoutRef.current = window.setTimeout(() => {
			setIsFading(false)

			fadeTimeoutRef.current = window.setTimeout(() => {
				goToNext()
			}, fadeDuration)
		}, currentDuration)

		return clearTimeouts
	}, [index, isPaused, isComplete, fadeDuration, words, goToNext, clearTimeouts])

	return {
		currentWord: words[index]?.word ?? '',
		currentIndex: index,
		isFading,
		isComplete,
		pause,
		resume,
		reset,
		next: goToNext,
		previous: goToPrevious,
	}
}
