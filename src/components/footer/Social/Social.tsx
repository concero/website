import type { FC } from "react";
import { SocialIcon } from "../../common/SocialIcon/SocialIcon";
import { TwitterIcon } from "@/assets/icons/twitter";
import { DiscordIcon } from "@/assets/icons/discord";
import { MediumIcon } from "@/assets/icons/medium";
import "./Social.pcss";

export const Social: FC = (): JSX.Element => {
    return (
        <div className="footer_content_ecosystem_section">
            <div className="footer_content_ecosystem_title">Follow</div>
            <div className="footer_content_ecosystem_socials">
                <SocialIcon icon={<TwitterIcon/>} social="twitter" link="https://twitter.com/conceroio"/>
                <SocialIcon icon={<DiscordIcon/>} social="discord" link="https://discord.gg/concero"/>
                <SocialIcon icon={<MediumIcon/>} social="medium" link="https://medium.com/concero"/>
            </div>
        </div>
    );
};