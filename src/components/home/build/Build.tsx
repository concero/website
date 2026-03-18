import type { FC, ReactElement } from 'react'
import cls from './Build.module.pcss'
import { HStack, VStack } from '@/components/common/Stack'
import { Text } from '@/components/common/Text/Text'
import { TopBlockchainIcon } from './icons/TopBlockchainIcon'
import { SettingIcon } from './icons/SettingIcon'
import { ConceroIcon } from './icons/ConceroIcon'
import { RevenuewIcon } from './icons/RevenueIcon'
import { LiquidityIcon } from './icons/LiquidityIcon'
import { OptimisationIcon } from './icons/OptimisationIcon'

export const Build: FC = (): ReactElement => {
	return (
		<section className={cls.home_build}>
			<VStack gap="32px" align="center" max className={cls.block}>
				<VStack gap="8px" align="center" justify="center">
					<Text variant="heading_xxlarge" className={cls.title}>
						Onboard users in seconds
					</Text>
					<Text variant="body_large" className={cls.description}>
						End-to-end deposit and withdrawal infrastructure that allows you to onboard users wherever they
						are
					</Text>
				</VStack>
				<HStack justify="center" className={cls.img_block_1}>
					<img src="/Build/deposit.webp" alt="" />
				</HStack>
				<div className={cls.list}>
					<HStack gap="8px" className={cls.list_item}>
						<TopBlockchainIcon />
						<Text variant="heading_medium">Top 50 blockchains </Text>
					</HStack>
					<HStack gap="8px" className={cls.list_item}>
						<SettingIcon />
						<Text variant="heading_medium">On/Off Ramping </Text>
					</HStack>
					<HStack gap="8px" className={cls.list_item} align="center" justify="center">
						<ConceroIcon />
						<Text variant="heading_medium">All major stablecoins </Text>
					</HStack>
				</div>
			</VStack>
			<VStack gap="32px" align="center" max className={cls.block}>
				<VStack gap="8px" align="center" justify="center">
					<Text variant="heading_xxlarge" className={cls.title}>
						Sustainable revenue for your Appchain
					</Text>
					<Text variant="body_large" className={cls.description}>
						Idle capital from user deposits gets deployed into a multi-chain vaults to generate revenue for
						you.
					</Text>
				</VStack>
				<HStack justify="center" className={cls.img_block_2}>
					<img src="/Build/earnings.webp" alt="" />
				</HStack>
				<div className={cls.list}>
					<HStack gap="8px" className={cls.list_item}>
						<RevenuewIcon />
						<Text variant="heading_medium">New revenue primitive </Text>
					</HStack>
					<HStack gap="8px" className={cls.list_item}>
						<LiquidityIcon />
						<Text variant="heading_medium">Unified cross-chain liquidity </Text>
					</HStack>
					<HStack gap="8px" className={cls.list_item} align="center" justify="center">
						<OptimisationIcon />
						<Text variant="heading_medium">Yield Optimisation algorithm </Text>
					</HStack>
				</div>
			</VStack>
		</section>
	)
}
