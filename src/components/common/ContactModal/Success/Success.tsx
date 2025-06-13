import { FC } from 'react'
import { Button } from '@concero/ui-kit'
import "./Success.pcss"

type SuccessProps = {
    onBack: () => void
}

export const Success: FC<SuccessProps> = ({ onBack }) => {
    return (
        <div className="contact_modal_success">
            <span className="contact_modal_success_title">Message Sent</span>
            <img src="/ContactUs/Success.png" alt="Success"/>
            <p className="contact_modal_success_text">We will be in touch with you shortly</p>
            <div className="contact_modal_success_button_container">
                <Button 
                    variant="primary" 
                    size="l"
                    isFull 
                    onClick={onBack} 
                    className="contact_modal_success_button"
                >
                    Done
                </Button>
            </div>
        </div>
    )
}
