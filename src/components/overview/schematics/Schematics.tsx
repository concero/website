import type { FC, ReactElement } from "react";
import "./Schematics.pcss";

export const Schematics: FC = (): ReactElement => {
    return (
        <div className="overview_schematics">
            <div className="overview_schematics_description">
                <span className="overview_schematics_title">Motherboard Schematics</span>
                <span className="overview_schematics_subtitle">User-defined modules work together to propagate messages</span>
            </div>
        </div>
    )
}