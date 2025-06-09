import type { FC } from 'react'
import { NavigationWidget } from '@/components/common/NavigationWidget/NavifgationWidget'
import './Developers.pcss'

const developer_links = [
  { title: 'Documentation', link: 'https://docs.concero.io' },
  { title: 'Whitepaper', link: 'https://concero.io/v2_whitepaper.pdf' },
] as const

export const Developers:FC = (): JSX.Element => (
  <div className="developer_section">
    <span className="developer_title">For Developers</span>
    <div className="developer_links">
      {developer_links.map(({ title, link }) => (
        <NavigationWidget key={title} title={title} link={link} />
      ))}
    </div>
  </div>
)
