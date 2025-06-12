import type { FC } from 'react'
import { useCallback } from 'react'
import { Button } from '@concero/ui-kit'
import { ClipboardIcon } from '@/assets/icons/clipboard'
import './Color.pcss'

type ColorProps = {
	color: string
}

export const Color: FC<ColorProps> = ({ color }) => {
	const copyToClipboard = useCallback(() => {
		navigator.clipboard.writeText(color)
	}, [color])

	return (
		<div className="color_container">
			<div className="color_display" style={{ backgroundColor: color }} />
			<Button variant="tetrary" className="color_button" rightIcon={<ClipboardIcon />} onClick={copyToClipboard}>
				{color}
			</Button>
		</div>
	)
}
