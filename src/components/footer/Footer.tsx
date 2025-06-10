import { Copyright } from './Copyright/Copyright'
import { Ecosystem } from './Ecosystem/Ecosystem'
import { Social } from './Social/Social'
import { Developers } from './Developers/Developers'
import './Footer.pcss'

export const Footer = () => (
	<footer className="concero_footer">
		<div className="concero_footer_separator" />
		<div className="concero_footer_brand">
			<img src="/Footer/ConceroDark.svg" className="concero_footer_logo" alt="Concero Logo" />
		</div>
		<div className="concero_footer_main">
			<Developers />
			<div className="concero_footer_secondary">
				<Ecosystem />
				<Social />
			</div>
		</div>
		<div className="concero_footer_separator" />
		<Copyright />
	</footer>
)
