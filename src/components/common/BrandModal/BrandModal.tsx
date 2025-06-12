import type { FC } from 'react'
import { useEffect } from 'react'
import { CloseIcon } from '@/assets/icons/close'
import { Button } from '@concero/ui-kit'
import { DownloadIcon } from '@/assets/icons/download'
import { BrandLogo } from '../BrandLogo/BrandLogo'
import './BrandModal.pcss'
import { BrandNotAllowed } from '../BrandNotAllowed/BrandNotAllowed'

type BrandModalProps = {
	isOpen: boolean
	onClose: () => void
}

export const BrandModal: FC<BrandModalProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			const originalOverflow = document.body.style.overflow
			document.body.style.overflow = 'hidden'
			return () => {
				document.body.style.overflow = originalOverflow
			}
		}
	}, [isOpen])

	if (!isOpen) {
		return null
	}

	return (
		<div className="brand_modal_overlay">
			<div className="brand_modal_container">
				<div className="brand_modal_header">
					<span className="brand_modal_title">Brand Kit</span>
					<div className="brand_modal_close" onClick={onClose}>
						<CloseIcon />
					</div>
				</div>
				<div className="brand_modal_assets">
					<Button variant="secondary" rightIcon={<DownloadIcon />}>
						Download Brand Kit
					</Button>
				</div>
				<div className="brand_modal_logos">
					<span className="brand_modal_section_title">Logo type</span>
					<div className="brand_modal_logos_section">
						<BrandLogo imgSVG="/BrandKit/Concero1.svg" imgPNG="/BrandKit/Concero1.png" />
						<BrandLogo imgSVG="/BrandKit/Concero2.svg" imgPNG="/BrandKit/Concero2.png" dark={true} />
						<BrandLogo imgSVG="/BrandKit/Concero3.svg" imgPNG="/BrandKit/Concero3.png" />
						<BrandLogo imgSVG="/BrandKit/Concero4.svg" imgPNG="/BrandKit/Concero4.png" dark />
						<BrandLogo imgSVG="/BrandKit/Concero5.svg" imgPNG="/BrandKit/Concero5.png" />
						<BrandLogo imgSVG="/BrandKit/Concero6.svg" imgPNG="/BrandKit/Concero6.png" dark />
					</div>
				</div>
                <div className='brand_modal_notice'>
                    <span className="brand_modal_section_title">Don't do this</span>
                    <div className='brand_modal_notice_section'>
                        <BrandNotAllowed imgSVG="/BrandKit/ConceroWrong1.svg" text="Don't change logo colours"/>
                        <BrandNotAllowed imgSVG="/BrandKit/ConceroWrong2.svg" text="Don't rotate logo"/>
                        {/* <BrandNotAllowed imgSVG="/BrandKit/ConceroWrong3.svg" text="Skew logo"/> */}
                        <BrandNotAllowed imgSVG="/BrandKit/ConceroWrong4.svg" text="Place dark version to light background or reverse way"/>
                        <BrandNotAllowed imgSVG="/BrandKit/ConceroWrong5.svg" text="Dont use any effects"/>
                        {/* <BrandNotAllowed imgSVG="/BrandKit/ConceroWrong6.svg" text="Do not alter the logo in any other way"/> */}
                    </div>
                </div>
			</div>
		</div>
	)
}
