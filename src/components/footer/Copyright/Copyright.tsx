import type { FC } from 'react'
import './Copyright.pcss'

const copyright_links = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Cookie Policy' },
] as const

export const Copyright:FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="copyright_section">
      <div className="copyright_text">© Concero {currentYear}</div>
      <div className="copyright_links">
        {copyright_links.map(link => (
          <a key={link.href} href={link.href} className="copyright_link">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
