import type { FC, ReactElement } from "react";
import { TwitterDarkIcon } from "@/assets/icons/twitterDark";
import "./SocialActions.pcss";

export const SocialActions: FC = (): ReactElement => {

    return (
        <div className="social_actions">
            <div className="social_actions_divider"/>
            <div className="social_actions_content">
                <a className="social_action">
                    <TwitterDarkIcon /> 
                </a>
                <a className="social_action">
                    <TwitterDarkIcon /> 
                </a>
                <a className="social_action">
                    <TwitterDarkIcon /> 
                </a>
                <a className="social_action">
                    <TwitterDarkIcon /> 
                </a>
                <a className="social_action">
                    <TwitterDarkIcon /> 
                </a>
            </div>
        </div>
    )

}