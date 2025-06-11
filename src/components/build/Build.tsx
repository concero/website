import type { FC } from "react";
import { useIsMobile, useIsTablet } from "@/hooks/useMediaQuery";
import { Button } from "@concero/ui-kit";
import { BuildInfo } from "../common/BuildInfo/BuildInfo";
import "./Build.pcss";

export const Build: FC = (): JSX.Element => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const imageSrc = isMobile ? "/Build/Build2.svg" : "/Build/Build.svg";
    const buttonSize = (isMobile || isTablet) ? "xl" : "l";

    const buildData = [
        { title: "Token Issuers", subtitle: "Expand cross-chain in the most capital efficient manner with Concero" },
        { title: "Protocols", subtitle: "Send messages and/or assets across any chain with Concero" },
        { title: "Ecosystem", subtitle: "Get access to our Ecosystem Portal to Test, Launch and Scale your project with Concero" },
        { title: "Apps", subtitle: "Allow any user in Web 3.0 to interact with your app no matter the chain in a single click with Concero" }
    ];

    return (
        <section className="build">
            <span className="build_title">Build with us</span>
            <div className="build_illustration_container">
                <img src={imageSrc} alt="Build Illustration" />
            </div>
            <div className="build_content">
                {buildData.map((item, index) => (
                    <BuildInfo key={index} title={item.title} subtitle={item.subtitle} />
                ))}
            </div>
            <div className="build_action">
                <Button size={buttonSize} variant="primary">
                    Start building
                </Button>
            </div>
        </section>
    )
}
