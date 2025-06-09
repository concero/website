import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@concero/ui-kit'
import { useIsMobile, useIsTablet } from '@/hooks/useMediaQuery'
import { IconButton } from '@concero/ui-kit'
import { MenuIcon } from '@/assets/icons/menu'
import { CloseIcon } from '@/assets/icons/close'
import { Burger } from '../Burger/Burger'
import './Actions.pcss'

export const Actions: FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isTablet = useIsTablet()
    const isMobile = useIsMobile()

    const showBurger = isMobile || isTablet

    useEffect(() => {
        if (!showBurger) {
            setIsOpen(false)
        }
    }, [showBurger])

    const toggleBurger = () => {
        setIsOpen(prev => !prev)
    }

    const handleContactUs = () => {
        window.location.href = 'mailto:team@concero.io'
    }

    const handleOpenTestnet = () => {
        window.open('https://testnet.concero.io', '_blank')
    }

    return (
        <>
            <div className="header_actions_container">
                <div className="header_actions">
                    {!isOpen && (
                        <>
                            <Button size="s" variant="secondary_color" onClick={handleOpenTestnet}>
                                Open Testnet
                            </Button>
                            {!isMobile && (
                                <Button size="s" variant="primary" onClick={handleContactUs}>
                                    Contact us
                                </Button>
                            )}
                        </>
                    )}
                    {showBurger && (
                        <IconButton size="s" variant="secondary" onClick={toggleBurger}>
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    )}
                </div>
            </div>
            {isOpen ? <Burger /> : null }
        </>
    )
}