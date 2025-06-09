import type { FC } from "react";
import { RightIcon } from "@/assets/icons/right";
import "./NavigationWidget.pcss";

type NavigationWidgetProps = {
    title: string;
    link: string;
}

export const NavigationWidget: FC<NavigationWidgetProps> = ({ 
    title, 
    link, 
}): JSX.Element => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="navigation_widget_link"
        >
            <div className="navigation_widget">
                <span className="navigation_widget_title">{title}</span>
                <div className="navigation_widget_button_container">
                    <div className="navigation_widget_button">
                        <RightIcon />
                    </div>
                </div>
            </div>
        </a>
    )
}