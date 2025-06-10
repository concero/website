import type { FC } from 'react'
import { DataWidget } from '../common/DataWidget/DataWidget'
import { ChainIntegrationsIcon } from '@/assets/icons/chainIntegrations'
import { MessageTimeIcon } from '@/assets/icons/messageTime'
import { TotalTxsIcon } from '@/assets/icons/totalTx'
import { AverageTxTimeIcon } from '@/assets/icons/averageTxTime'
import { MainnetVolumeIcon } from '@/assets/icons/mainnetVolume'
import './Data.pcss'

const integrationData = [
	{
		title: 'Chains integrated in under 1 week',
		data: '108',
		icon: <ChainIntegrationsIcon />,
	},
	{
		title: 'Time to first message',
		data: '<30min',
		icon: <MessageTimeIcon />,
	},
]

const transactionData = [
	{
		title: 'Total TXs',
		data: '600k +',
		icon: <TotalTxsIcon />,
	},
	{
		title: 'Average TX time',
		data: '13.85s',
		icon: <AverageTxTimeIcon />,
	},
	{
		title: 'Total mainnet volume',
		data: '$100m +',
		icon: <MainnetVolumeIcon />,
	},
]

export const Data: FC = () => (
	<section className="data">
		<span className="data_title">Concero in numbers</span>
		<div className="data_content">
			<div className="data_content_left">
				<span className="data_content_title">Integration</span>
				{integrationData.map((item, idx) => (
					<>
						<DataWidget key={item.title} {...item} />
						{idx < integrationData.length - 1 && <div className="data_divider" />}
					</>
				))}
			</div>
			<div className="data_content_right">
				<span className="data_content_title">Transactions</span>
				{transactionData.map((item, idx) => (
					<>
						<DataWidget key={item.title} {...item} />
						{idx < transactionData.length - 1 && <div className="data_divider" />}
					</>
				))}
			</div>
		</div>
	</section>
)
