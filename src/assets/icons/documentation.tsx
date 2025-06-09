import type { FC } from 'react'

type DocumentationIconProps = {
	color?: string
}

export const DocumentationIcon: FC<DocumentationIconProps> = ({ color = '#66767D' }): JSX.Element => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0.900024 2.7C0.900024 1.20883 2.10886 0 3.60002 0H11.7C11.9671 0 12.2204 0.118641 12.3914 0.323834L16.8914 5.72383C17.0262 5.88558 17.1 6.08946 17.1 6.3V15.3C17.1 16.7912 15.8912 18 14.4 18H3.60002C2.10886 18 0.900024 16.7912 0.900024 15.3V2.7ZM3.60002 1.8C3.10297 1.8 2.70002 2.20294 2.70002 2.7V15.3C2.70002 15.7971 3.10297 16.2 3.60002 16.2H14.4C14.8971 16.2 15.3 15.7971 15.3 15.3V7.2H11.7C11.203 7.2 10.8 6.79706 10.8 6.3V1.8H3.60002ZM12.6 3.38584L14.2785 5.4H12.6V3.38584Z"
				fill={color}
			/>
		</svg>
	)
}
