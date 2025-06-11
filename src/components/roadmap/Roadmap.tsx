import type { FC } from "react";
import { VMs } from "./VMs/VMs";
import { Permissionless } from "./Permissionless/Permissionless";
import { DePin } from "./DePin/DePin";
import "./Roadmap.pcss";

export const Roadmap: FC = () => {
    return (
        <section className="roadmap">
            <span className="roadmap_title">Roadmap</span>
            <div className="roadmap_content">
                <div className="roadmap_description_container">
                    <span className="roadmap_description">Next steps towards commoditising cross-chain communication</span>
                </div>
                <div className="roadmap_items_container">
                    <VMs />
                    <Permissionless />
                    <DePin />
                </div>
            </div>
        </section>
    )
}