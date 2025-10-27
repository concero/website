import type { FC, ReactElement, CSSProperties } from "react";
import type { LottieOptions } from "lottie-react";
import { memo, useMemo, useEffect, useCallback } from "react";
import { useIsTablet, useIsMobile } from "@/hooks/useMediaQuery";
import { useLottie } from "lottie-react";
import { Button } from "@concero/ui-kit";
import { links } from "@/configuration/links";

import LottieAnimation from "@/assets/animations/how_it_works.json";
import "./HowItWorks.pcss";

export const HowItWorks: FC = memo((): ReactElement => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const isStatic = isMobile || isTablet;
    
    const lottieOptions = useMemo<LottieOptions>(
        () => ({
            animationData: LottieAnimation,
            loop: true,
            autoplay: false,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        }), 
        []
    );

    const lottieStyle = useMemo<CSSProperties>(
        () => ({
            width: '100%',
            height: '100%',
            transition: 'opacity 300ms ease-in-out'
        }), 
        []
    );

    const { View, play, stop, goToAndStop, getDuration, animationLoaded } = useLottie(
        lottieOptions, 
        lottieStyle
    );
    
    useEffect(() => {
        if (!animationLoaded) return;

        if (isStatic) {
            const frames = getDuration(true);
            if (typeof frames === 'number') {
                goToAndStop(frames - 1, true);
            }
        } else {
            goToAndStop(0, true);
        }
    }, [isStatic, animationLoaded, getDuration, goToAndStop]);

    const onMouseEnter = useCallback((): void => {
        if (!isStatic) {
            play();
        }
    }, [isStatic, play]);

    const onMouseLeave = useCallback((): void => {
        if (!isStatic) {
            stop();
        }
    }, [isStatic, stop]);

    const onClick = useCallback((): void => {
        window.open(links.documentation, '_blank', 'noopener,noreferrer');
    }, []);

    return (
        <section className="how_it_works">
            <div className="how_it_works_description">
                <h2 className="how_it_works_title">How it works</h2>
                <p className="how_it_works_subtitle">
                    Concero organises interactions between specialised actors to enable 
                    interoperability for those who bring value and users on-chain
                </p>
            </div>
            <div 
                className="how_it_works_visual"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {View}
            </div>
            <div className="how_it_works_action">
                <Button 
                    size="xl" 
                    variant="secondary" 
                    className="how_it_works_action_button"
                    onClick={onClick}
                >
                    Learn more in the docs
                </Button>
            </div>
        </section>
    );
});

