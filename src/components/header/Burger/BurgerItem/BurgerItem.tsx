import { ReactNode } from 'react'
import './BurgerItem.pcss'

type BurgerItemProps = {
  title: string
  href: string
  icon: ReactNode
}

export const BurgerSectionItem = ({ title, href, icon }: BurgerItemProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="burger_item_link"
  >
    <div className="burger_item">
      <div className="burger_item_icon_container">
        <div className="burger_icon_wrapper">{icon}</div>
      </div>
      <span className="burger_item_title">{title}</span>
    </div>
  </a>
)
