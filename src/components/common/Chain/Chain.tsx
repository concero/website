import type { FC } from 'react'
import './Chain.pcss'

type ChainProps = {
	name: string
	logo: string
}

export const Chain: FC<ChainProps> = ({ name, logo }): JSX.Element => {
	return (
		<div className="chain">
			<img alt="Chain" src={logo} className="chain_logo" />
			<span className="chain_name">{name}</span>
		</div>
	)
}
