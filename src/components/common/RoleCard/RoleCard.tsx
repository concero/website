import type { FC, ReactElement } from "react";
import { Tag } from "@concero/ui-kit";
import "./RoleCard.pcss";

type RoleCardProps = {
    title: string;
    description: string;
    tags: string[];
    img: string;
}

export const RoleCard: FC<RoleCardProps> = ({ title, description, tags, img }): ReactElement => {
    return (
        <div className="role_card">
            <div className="role_card_content">
                <div className="role_card_description">
                    <span className="role_card_title">{title}</span>
                    <p className="role_card_subtitle">{description}</p>
                </div>
                <div className="role_card_tags">
                    {tags.map((tag, index) => (
                        <Tag 
                            key={index}
                            variant="branded" 
                            className="role_card_tag"
                        >
                            {tag}
                        </Tag>
                    ))}
                </div>
            </div>
            <div className="role_card_visual">
                <img src={img} alt={`${title} visual`} />
            </div>
        </div>
    )
}