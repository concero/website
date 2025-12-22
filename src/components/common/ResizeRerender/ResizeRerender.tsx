import React, { useState, useEffect, PropsWithChildren, ReactElement } from 'react'

export const ResizeRerender = ({ children }: PropsWithChildren) => {
	const [key, setKey] = useState(0)

	useEffect(() => {
		const handler = () => setKey(prev => prev + 1)
		window.addEventListener('resize', handler, { passive: true })
		return () => window.removeEventListener('resize', handler)
	}, [])

	return <>{React.cloneElement(children as ReactElement, { key })}</>
}
