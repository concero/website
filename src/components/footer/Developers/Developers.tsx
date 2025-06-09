import type { FC } from "react";
import { NavigationWidget } from "@/components/common/NavigationWidget/NavifgationWidget";
import "./Developers.pcss";

export const Developers: FC = (): JSX.Element => {
    return (
        <div className="footer_content_developer">
            <span className="footer_content_developer_title">For Developers</span>
            <div className="footer_content_developer_links">
                <NavigationWidget title="Documentation" link="https://docs.concero.io" />
                <NavigationWidget title="Whitepaper" link="https://concero.io/v2_whitepaper.pdf" />
            </div>
        </div>
    );
};