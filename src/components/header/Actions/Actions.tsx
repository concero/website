import { useState, useEffect } from 'react'
import { Button, IconButton } from '@concero/ui-kit'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { MenuIcon } from '@/assets/icons/menu'
import { CloseIcon } from '@/assets/icons/close'
import { Burger } from '../Burger/Burger'
import { useModalContext } from '@/reducer/modalContext'
import './Actions.pcss'

export const Actions = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { dispatch } = useModalContext()
    const isTablet = useIsTablet()
    const isMobile = useIsMobile()
    const showBurger = isMobile || isTablet

    useEffect(() => {
        if (!showBurger) setIsOpen(false)
    }, [showBurger])

    const handleContactClick = () => {
        dispatch({ type: 'OPEN_CONTACT' })
    }

    return (
        <>
            <div className="actions_container">
                <div className="actions_buttons">
                    {!isOpen && (
                        <>
                            <Button
                                size="s"
                                variant="secondary_color"
                                onClick={() => window.open('https://testnet.concero.io', '_blank')}
                            >
                                Open Testnet
                            </Button>
                            {!isMobile && (
                                <Button size="s" variant="primary" onClick={handleContactClick}>
                                    Contact us
                                </Button>
                            )}
                        </>
                    )}
                    {showBurger && (
                        <IconButton size="s" variant="secondary" onClick={() => setIsOpen(prev => !prev)}>
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    )}
                </div>
            </div>
            {isOpen && <Burger />}
        </>
    )
}