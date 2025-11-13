import type { FC, ReactElement } from "react";
import { Button } from "@concero/ui-kit";
import "./Infra.pcss";

export const Infra: FC = (): ReactElement => {
  return (
    <div className="overview_infra">
        <div className="overview_infra_description">
            <div className="overview_infra_description_heading">
                <span className="overview_infra_description_title">Provide Infrastructure</span>
                <span className="overview_infra_description_subtitle">Permissinolessly deploy your own module and connect to Motherboard</span>
            </div>
            <Button variant="primary" size="xl" className="overview_infra_description_action">
                Integrate
            </Button>
        </div>
    </div>
  )
};