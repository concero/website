import type { FC } from 'react'
import './BrandNotAllowed.pcss'

type BrandNotAllowedProps = {
    imgSVG: string
    text: string
}

export const BrandNotAllowed: FC<BrandNotAllowedProps> = ({ imgSVG, text }): JSX.Element => {
    return (
        <div className="brand_not_allowed">
            <div className="brand_not_allowed_container">
                <img src={imgSVG} alt="Brand Usage Not Allowed" className="brand_not_allowed_image" />
            </div>
            <span className="brand_not_allowed_text">
                {text}
            </span>
        </div>
    )
}