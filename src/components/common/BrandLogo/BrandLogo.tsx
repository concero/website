import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import { DownloadIcon } from '@/assets/icons/download'
import './BrandLogo.pcss'

type BrandLogoProps = {
	imgSVG: string
	imgPNG?: string
	dark?: boolean
}

export const BrandLogo: FC<BrandLogoProps> = ({ imgSVG, imgPNG, dark = false }): JSX.Element => {
	const handleDownload = (url: string, filename: string) => {
		const link = document.createElement('a')
		link.href = url
		link.download = filename
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<div className="brand_logo">
			<div className={`brand_logo_container ${dark ? 'brand_logo_container_dark' : ''}`}>
				<img src={imgSVG} alt="Brand Logo" className="brand_logo_image" />
			</div>
			<div className="brand_logo_button_group">
				<Button
					variant="tetrary"
					size="s"
					className="brand_logo_button"
					rightIcon={<DownloadIcon />}
					onClick={() => handleDownload(imgSVG, imgSVG.split('/').pop() || 'brand-logo.svg')}
				>
					.SVG
				</Button>
				{imgPNG && (
					<Button
						variant="tetrary"
						size="s"
						className="brand_logo_button"
						rightIcon={<DownloadIcon />}
						onClick={() => handleDownload(imgPNG, imgPNG.split('/').pop() || 'brand-logo.png')}
					>
						.PNG
					</Button>
				)}
			</div>
		</div>
	)
}
