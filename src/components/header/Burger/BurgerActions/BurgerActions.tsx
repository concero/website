import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import "./BurgerActions.pcss"

export const BurgerActions: FC = () => {
  const handleContactUs = () => {
    window.location.href = 'mailto:contact@concero.io'
  }

  const handleOpenTestnet = () => {
    window.open('https://app.concero.io', '_blank')
  }

  return (
    <div className="header_burger_actions">
      <Button 
        variant="primary" 
        size="xl" 
        isFull 
        onClick={handleContactUs}
      >
        Contact Us
      </Button>
      <Button 
        variant="secondary_color" 
        size="xl" 
        isFull 
        onClick={handleOpenTestnet}
      >
        Open Testnet
      </Button>
    </div>
  )
}