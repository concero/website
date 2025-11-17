import type { FC, ReactElement } from "react";
import { FAQItem } from "./FAQItem/FAQItem";
import "./FAQ.pcss";

type FAQProps = {
    data: readonly { question: string; answer: string }[]
}

export const FAQ: FC<FAQProps> = ({ data }): ReactElement => {
    return (
        <div className="faq_container">
            {data.map((item, index) => (
                <>
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                    <div className="faq_divider" />
                </>
            ))}
        </div>
    )
}
