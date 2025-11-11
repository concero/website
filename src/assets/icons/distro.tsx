import type { FC } from 'react'

export const DistroIcon: FC = (): JSX.Element => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9765 5.02355 16.2 9 16.2V18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9H16.2C16.2 5.02355 12.9765 1.8 9 1.8Z"
				fill="#66767D"
			/>
			<rect x="12.6" y="9" width="1.8" height="9" rx="0.9" fill="#66767D" />
			<rect x="18" y="12.6" width="1.8" height="9" rx="0.9" transform="rotate(90 18 12.6)" fill="#66767D" />
			<path d="M9 16.2C9.49706 16.2 9.9 16.603 9.9 17.1C9.9 17.5971 9.49706 18 9 18V16.2Z" fill="#66767D" />
			<path d="M18 9C18 9.49706 17.5971 9.9 17.1 9.9C16.6029 9.9 16.2 9.49706 16.2 9L18 9Z" fill="#66767D" />
		</svg>
	)
}
