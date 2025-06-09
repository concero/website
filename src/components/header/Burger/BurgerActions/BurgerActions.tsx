import type { FC } from 'react'
import { Button } from '@concero/ui-kit'
import "./BurgerActions.pcss"

export const BurgerActions: FC = () => (
  <div className="header_burger_actions">
    <Button variant="primary" size="xl" isFull>Contact Us</Button>
    <Button variant="secondary_color" size="xl" isFull>Open Testnet</Button>
  </div>
)
