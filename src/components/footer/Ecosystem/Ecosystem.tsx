import type { FC } from 'react'
import { links } from '@/configuration/links'
import './Ecosystem.pcss'

const ecosystem_sections = [
  {
    title: 'Ecosystem',
    links: [
      { href: links.rewards, label: 'Rewards Portal' },
      { href: links.liquidity, label: 'Provide Liquidity' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: links.blog, label: 'Blog' },
      { href: 'https://docs.concero.io/brand', label: 'Brand Assets' },
    ],
  },
] as const

export const Ecosystem: FC = (): JSX.Element => (
  <div className="ecosystem_wrapper">
    {ecosystem_sections.map(section => (
      <div className="ecosystem_section" key={section.title}>
        <div className="ecosystem_title">{section.title}</div>
        <div className="ecosystem_links">
          {section.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="ecosystem_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
)
