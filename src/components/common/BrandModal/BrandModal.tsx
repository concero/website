import type { FC } from 'react'
import { useEffect, useMemo } from 'react'
import { CloseIcon } from '@/assets/icons/close'
import { Button } from '@concero/ui-kit'
import { DownloadIcon } from '@/assets/icons/download'
import { BrandLogo } from '../BrandLogo/BrandLogo'
import { BrandNotAllowed } from '../BrandNotAllowed/BrandNotAllowed'
import { BrandTypograhpy } from '../BrandTypography/BrandTypograhpy'
import { BrandColors } from '../BrandColors/BrandColors'
import './BrandModal.pcss'

type BrandModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const BrandModal: FC<BrandModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const logos = useMemo(
    () => [
      { imgSVG: '/BrandKit/Concero1.svg', imgPNG: '/BrandKit/Concero1.png', dark: false },
      { imgSVG: '/BrandKit/Concero2.svg', imgPNG: '/BrandKit/Concero2.png', dark: true },
      { imgSVG: '/BrandKit/Concero3.svg', imgPNG: '/BrandKit/Concero3.png', dark: false },
      { imgSVG: '/BrandKit/Concero4.svg', imgPNG: '/BrandKit/Concero4.png', dark: true },
      { imgSVG: '/BrandKit/Concero5.svg', imgPNG: '/BrandKit/Concero5.png', dark: false },
      { imgSVG: '/BrandKit/Concero6.svg', imgPNG: '/BrandKit/Concero6.png', dark: true },
    ],
    []
  )

  const notAllowedItems = useMemo(
    () => [
      { imgSVG: '/BrandKit/ConceroWrong1.svg', text: "Don't change logo colours" },
      { imgSVG: '/BrandKit/ConceroWrong2.svg', text: "Don't rotate logo" },
      { imgSVG: '/BrandKit/ConceroWrong4.svg', text: "Place dark version to light background or reverse way" },
      { imgSVG: '/BrandKit/ConceroWrong5.svg', text: "Don't use any effects" },
    ],
    []
  )

  const colorGroups = useMemo(
    () => [
      { title: 'Brand', colors: ['#5925E6', '#7E54F1', '#F3F1FE'] },
      { title: 'Grey', colors: ['#4B575C', '#66767D', '#F3F5F6'] },
      { title: 'Green', colors: ['#11633B', '#17854F', '#DAFBEA'] },
      { title: 'Yellow', colors: ['#755000', '#E79E00', '#FFF2D6'] },
      { title: 'Red', colors: ['#B10909', '#E80C0C', '#FEEFEF'] },
    ],
    []
  )

  if (!isOpen) return null

  return (
    <div className="brand_modal_overlay" role="dialog" aria-modal="true">
      <div className="brand_modal_container">
        <div className="brand_modal_header">
          <span className="brand_modal_title">Brand Kit</span>
          <div
            className="brand_modal_close"
            onClick={onClose}
            role="button"
            tabIndex={0}
            aria-label="Close modal"
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') onClose()
            }}
          >
            <CloseIcon />
          </div>
        </div>

        <div className="brand_modal_assets">
          <Button variant="secondary" rightIcon={<DownloadIcon />}>
            Download Brand Kit
          </Button>
        </div>

        <div className="brand_modal_section">
          <span className="brand_modal_section_title">Logo type</span>
          <div className="brand_modal_logos_section">
            {logos.map(({ imgSVG, imgPNG, dark }, i) => (
              <BrandLogo key={imgSVG} imgSVG={imgSVG} imgPNG={imgPNG} dark={dark} />
            ))}
          </div>
        </div>

        <div className="brand_modal_section">
          <span className="brand_modal_section_title">Don't do this</span>
          <div className="brand_modal_notice_section">
            {notAllowedItems.map(({ imgSVG, text }) => (
              <BrandNotAllowed key={imgSVG} imgSVG={imgSVG} text={text} />
            ))}
          </div>
        </div>

        <div className="brand_modal_section">
          <span className="brand_modal_section_title">Typography</span>
          <div className="brand_modal_typography_section">
            <BrandTypograhpy version="bold" />
            <BrandTypograhpy version="regular" />
          </div>
        </div>

        <div className="brand_modal_section">
          <span className="brand_modal_section_title">Colours</span>
          <div className="brand_modal_colors_section">
            {colorGroups.map(({ title, colors }) => (
              <BrandColors key={title} title={title} colors={colors} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
