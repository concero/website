import { Copyright } from './Copyright/Copyright'
import { Ecosystem } from './Ecosystem/Ecosystem'
import { Social } from './Social/Social'
import { Developers } from './Developers/Developers'
import './Footer.pcss'

export const Footer = () => (
  <footer className="footer_section">
    <div className="footer_divider" />
    <div className="footer_logo_container">
      <img src="/Footer/ConceroDark.svg" className="footer_logo" alt="Concero Logo" />
    </div>
    <div className="footer_content">
      <Developers />
      <div className="footer_ecosystem_content">
        <Ecosystem />
        <Social />
      </div>
    </div>
    <div className="footer_divider" />
    <Copyright />
  </footer>
)
