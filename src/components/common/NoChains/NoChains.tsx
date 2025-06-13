import type { FC } from "react";
import "./NoChains.pcss";

export const NoChains: FC = (): JSX.Element => {

    return (
        <div className="no_chains">
            <img src="/Chains/NoChains.svg" alt="No chains available" className="no_chains_img" />
            <span className="no_chains_text">No result found</span>
        </div>
    )
}