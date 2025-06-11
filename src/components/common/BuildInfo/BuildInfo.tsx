import type { FC } from "react";
import "./BuildInfo.pcss";

type BuildInfoProps = {
    title: string;
    subtitle: string;
}

export const BuildInfo: FC<BuildInfoProps> = ({ title, subtitle}): JSX.Element => {
    
    return (
        <div className="build_info">
            <span className="build_info_title">{title}</span>
            <span className="build_info_subtitle">{subtitle}</span>
        </div>
    )

}