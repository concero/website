import type { FC, ReactElement } from "react";
import { memo, useMemo } from "react";
import { useLottie } from "lottie-react";
import { Button } from "@concero/ui-kit";

import LottieAnimation from "@/assets/animations/how_it_works.json";
import "./HowItWorks.pcss";

export const HowItWorks: FC = memo((): ReactElement => {
    const lottieOptions = useMemo(() => ({
        animationData: LottieAnimation,
        loop: true,
        autoplay: false,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
        }
    }), []);

    const lottieStyle = useMemo(() => ({
        width: '100%',
        height: '100%',
        transition: 'opacity 300ms ease-in-out'
    }), []);

    const { View, play, stop } = useLottie(lottieOptions, lottieStyle);

    const onMouseEnter = () => {
        play();
    };

    const onMouseLeave = () => {
        stop();
    };

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
                >
                    Learn more in the docs
                </Button>
            </div>
        </section>
    );
});

