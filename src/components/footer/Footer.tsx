import type { FC } from "react";
import "./Footer.pcss";
import { NavigationWidget } from "../common/NavigationWidget/NavifgationWidget";

export const Footer: FC = (): JSX.Element => {

    return (
        <footer className="footer">
            <div className="footer_divider"/>
            <div className="footer_logo_container">
                <img src="/Footer/ConceroDark.svg" className="footer_logo" alt="Concero Logo" />
            </div>
            <div className="footer_content">
                <div className="footer_content_developer">
                    <span className="footer_content_developer_title">For Developers</span>
                    <div className="footer_content_developer_links">
                        <NavigationWidget title="Documentation" link="https://docs.concero.io" />
                        <NavigationWidget title="Whitepaper" link="https://concero.io/v2_whitepaper.pdf" />

                    </div>
                </div>
                <div className="footer_content_ecosystem">

                </div>
            </div>
            <div className="footer_divider"/>
        </footer>
    )
}