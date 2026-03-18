import { HStack, VStack } from '@/components/common/Stack'
import cls from './Steps.module.pcss'
import { Button, Tag } from '@concero/ui-kit'
import { Text } from '@/components/common/Text/Text'
import { TimeIcon } from './TimeIcon'

export const Steps = () => {
	return (
		<section className={cls.steps_section}>
			<VStack gap="32px" align="center" max>
				<VStack gap="8px" align="center">
					<Text variant="heading_xxlarge" className={cls.title}>
						Get started in minutes, go live in hours
					</Text>
					<Text variant="body_large" className={cls.description}>
						Sign up through our web platform and set up your appchain in a matter of hours to start
						servicing your first users.
					</Text>
				</VStack>
				<div className={cls.steps}>
					<Step
						order="1"
						time="~ 3 min"
						title="Create your organization"
						description="Name, email, password— standard account setup with email verification."
					/>
					<Step
						order="2"
						time="~ 2 min"
						title="Add withdrawal wallet"
						description="Enter the wallet address for fee payouts. Multisig supported."
					/>
					<Step
						order="3"
						time="~ 15 min"
						title="Submit chain config"
						description="Fill out a short form with your chain details and technical specs."
					/>
					<Step
						order="4"
						time="Up to 1 day"
						title="We integrate your chain"
						description="Our team deploys and tests the Depo bridge contracts on your behalf."
					/>
				</div>
				<Button variant="primary" size="l">
					Get Started
				</Button>
			</VStack>
		</section>
	)
}

const Step = ({
	description,
	order,
	time,
	title,
}: {
	order: string
	time: string
	title: string
	description: string
}) => {
	return (
		<VStack gap="12px" className={cls.step} max>
			<HStack gap="16px" max>
				<Tag size="m" variant="neutral">
					{order} Step
				</Tag>
				<HStack gap="8px" max>
					<TimeIcon />
					<Text variant="heading_small" className={cls.title}>
						{time}
					</Text>
				</HStack>
			</HStack>
			<VStack gap="8px" className={cls.step_content_block} max>
				<Text variant="heading_large" className={cls.title}>
					{title}
				</Text>
				<Text variant="body_large" className={cls.description}>
					{description}
				</Text>
			</VStack>
		</VStack>
	)
}
