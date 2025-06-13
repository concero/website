import { Button } from '@concero/ui-kit'
import { useModalContext } from '@/reducer/modalContext'
import './BurgerActions.pcss'

export const BurgerActions = () => {
    const { dispatch } = useModalContext()

    const handleContactClick = () => {
        dispatch({ type: 'OPEN_CONTACT' })
    }

    return (
        <div className="burger_actions">
            <Button
                variant="primary"
                size="l"
                isFull
                onClick={handleContactClick}
            >
                Contact Us
            </Button>
            <Button
                variant="secondary_color"
                size="l"
                isFull
                onClick={() => {
                    window.open('https://app.concero.io', '_blank')
                }}
            >
                Open Testnet
            </Button>
        </div>
    )
}