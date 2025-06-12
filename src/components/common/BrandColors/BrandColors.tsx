import type { FC } from "react";
import { Color } from "./Color/Color";
import "./BrandColors.pcss";

type ColorType = {
    title: string;
    colors: string[];
};

export const BrandColors: FC<ColorType> = ({ title, colors }): JSX.Element => {
    return (
        <div className="brand_colors_container">
            <span className="brand_colors_title">{title}</span>
            <div className="brand_colors_content">
                {colors.map((color, index) => (
                    <Color key={`${title}-${index}`} color={color} />
                ))}
            </div>
        </div>
    )
}