import type { FC } from 'react'
import { useMemo } from 'react'
import { Copyright } from './Copyright/Copyright'
import { Ecosystem } from './Ecosystem/Ecosystem'
import { Social } from './Social/Social'
import { Developers } from './Developers/Developers'
import './Footer.pcss'

export const Footer: FC = (): JSX.Element => {
	const copyright = useMemo(() => {
		return <Copyright />
	}, [])

	const ecosystem = useMemo(() => {
		return <Ecosystem />
	}, [])

	const social = useMemo(() => {
		return <Social />
	}, [])

	const developers = useMemo(() => {
		return <Developers />
	}, [])

	return (
		<footer className="footer">
			<div className="footer_divider" />
			<div className="footer_logo_container">
				<img src="/Footer/ConceroDark.svg" className="footer_logo" alt="Concero Logo" />
			</div>
			<div className="footer_content">
				{developers}
				<div className="footer_content_ecosystem">
					{ecosystem}
					{social}
				</div>
			</div>
			<div className="footer_divider" />
			{copyright}
		</footer>
	)
}
