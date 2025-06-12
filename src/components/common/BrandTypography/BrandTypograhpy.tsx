import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import { RightIcon } from '@/assets/icons/right'
import './BrandTypography.pcss'

type BrandTypographyProps = {
	version: 'bold' | 'regular'
}

export const BrandTypograhpy: FC<BrandTypographyProps> = ({ version }): JSX.Element => {
	const title = version === 'bold' ? 'DM Sans Medium -2%' : 'DM Sans Regular'
	const description = version === 'bold' ? 'For headlines' : 'For body text'

	return (
		<div className="brand_typography">
			<div className="brand_typography_container">
				<span className={version === 'bold' ? 'brand_typography_bold' : 'brand_typography_regular'}>Aa</span>
			</div>
			<div className="brand_typography_description">
				<span className="brand_typography_description_title">{title}</span>
				<span className="brand_typography_description_subtitle">{description}</span>
			</div>
			<Button
				variant="tetrary"
				size="s"
				rightIcon={<RightIcon />}
				onClick={() =>
					window.open('https://fonts.google.com/specimen/DM+Sans', '_blank', 'noopener,noreferrer')
				}
			>
				Open Google Fonts
			</Button>
		</div>
	)
}
