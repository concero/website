import type { FC, ReactElement, ReactNode } from "react";
import "./BenefitCard.pcss";

type BenefitCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
}   

export const BenefitCard: FC<BenefitCardProps> = ({ icon, title, description }): ReactElement => {

    return (
        <div className="benefit_card">
            <div className="benefit_card_icon">
                {icon}
            </div>
            <div className="benefit_card_description">
                <span className="benefit_card_title">{title}</span>
                <span className="benefit_card_text">{description}</span>
            </div>
        </div>
    )

}