import type { ReactElement } from 'react'
import { HStack, VStack } from '@/components/common/Stack'
import { Text } from '@/components/common/Text/Text'

import cls from './Reach.module.pcss'
import { useWidthScreen } from '@/hooks/useWidthScreen'

export const Reach = (): ReactElement => {
	const isMobile = useWidthScreen('mobile', 'only')
	const Stack = isMobile ? VStack : HStack
	return (
		<section className={cls.home_reach}>
			<Stack gap={'32px'} max>
				<VStack gap="space_0_5" align="center" max>
					<Text variant={isMobile ? 'heading_xxxlarge' : 'heading_xxxxlarge'} className={cls.reach_number}>
						$950B
					</Text>
					<Text variant="body_large" className={cls.reach_description}>
						Total Reachable onchain Value
					</Text>
				</VStack>
				<VStack gap="space_0_5" align="center" max>
					<Text variant={isMobile ? 'heading_xxxlarge' : 'heading_xxxxlarge'} className={cls.reach_number}>
						250M
					</Text>
					<Text variant="body_large" className={cls.reach_description}>
						Total Reachable onchain Wallets
					</Text>
				</VStack>
				<VStack gap="space_0_5" align="center" max>
					<Text variant={isMobile ? 'heading_xxxlarge' : 'heading_xxxxlarge'} className={cls.reach_number}>
						100+
					</Text>
					<Text variant="body_large" className={cls.reach_description}>
						Fiat currencies supported for on-ramping
					</Text>
				</VStack>
			</Stack>
		</section>
	)
}
