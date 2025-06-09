import type { FC } from "react";
import { NavigationWidget } from "../common/NavigationWidget/NavifgationWidget";
import { SocialIcon } from "../common/SocialIcon/SocialIcon";
import { TwitterIcon } from "@/assets/icons/twitter";
import { DiscordIcon } from "@/assets/icons/discord";
import { MediumIcon } from "@/assets/icons/medium";
import "./Footer.pcss";

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
                    <div className="footer_content_ecosystem_section">
                        <div className="footer_content_ecosystem_title">Ecosystem</div>
                        <div className="footer_content_ecosystem_links">
                            <a className="footer_content_ecosystem_link">Rewards Portal</a>
                            <a className="footer_content_ecosystem_link">Provide Liquidity</a>

                        </div>
                    </div>
                    <div className="footer_content_ecosystem_section">
                        <div className="footer_content_ecosystem_title">Resources</div>
                        <div className="footer_content_ecosystem_links">
                            <a className="footer_content_ecosystem_link">Blog</a>
                            <a className="footer_content_ecosystem_link">Brand Assets</a>

                        </div>
                    </div>
                    <div className="footer_content_ecosystem_section">
                        <div className="footer_content_ecosystem_title">Follow</div>
                        <div className="footer_content_ecosystem_socials">
                            <SocialIcon icon={<TwitterIcon/>} social="twitter" link=""/>
                            <SocialIcon icon={<DiscordIcon/>} social="discord" link=""/>
                            <SocialIcon icon={<MediumIcon/>} social="medium" link=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_divider"/>
        </footer>
    )
}