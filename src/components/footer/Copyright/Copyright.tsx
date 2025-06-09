import type { FC } from 'react'
import './Copyright.pcss'

export const Copyright: FC = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className="footer_copyright">
			<div className="footer_copyright_text">© Concero {currentYear}</div>
			<div className="footer_copyright_links">
				<a href="/privacy-policy" className="footer_copyright_link">
					Privacy Policy
				</a>
				<a href="/terms" className="footer_copyright_link">
					Cookie Policy
				</a>
			</div>
		</div>
	)
}
