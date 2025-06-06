import { useState, useEffect, useMemo } from 'react'

export const breakpoints = {
	mobile: '(max-width: 576px)',
	tablet: '(max-width: 768px) and (min-width: 577px)',
	desktop: '(min-width: 769px)',
}

type BreakpointKey = keyof typeof breakpoints

const getQueryString = (query: string | BreakpointKey) => breakpoints[query as BreakpointKey] || query

const useMediaQuery = (query: string | BreakpointKey): boolean => {
	const queryString = useMemo(() => getQueryString(query), [query])
	const [matches, setMatches] = useState<boolean>(() => {
		if (typeof window === 'undefined') return false
		return window.matchMedia(queryString).matches
	})

	useEffect(() => {
		if (typeof window === 'undefined') return

		const media = window.matchMedia(queryString)
		const updateMatches = (e: MediaQueryListEvent) => setMatches(e.matches)

		setMatches(media.matches)
		media.addEventListener('change', updateMatches)

		return () => {
			media.removeEventListener('change', updateMatches)
		}
	}, [queryString])

	return matches
}

export const useIsMobile = () => useMediaQuery('mobile')
export const useIsTablet = () => useMediaQuery('tablet')
export const useIsDesktop = () => useMediaQuery('desktop')

export default useMediaQuery
