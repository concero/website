import type { FC } from "react";
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

                </div>
            </div>
        </section>
    )
}