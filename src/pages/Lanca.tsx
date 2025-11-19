import type { FC } from 'react'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'
import { Lanca } from '@/components/lanca/Lanca'

const META_TITLE = 'Concero | Cross-chain Messaging & Bridging'
const META_DESCRIPTION =
	'Making cross-chain effortless. A quicker, safer &amp; easier to use cross-chain infrastructure. Scalable, secure, capital efficient and decentralised bridging & messaging'

export const LancaPage: FC = (): JSX.Element => {
	return (
		<>
			<MetaTags title={META_TITLE} description={META_DESCRIPTION} />
			<main>
				<Lanca />
			</main>
		</>
	)
}
