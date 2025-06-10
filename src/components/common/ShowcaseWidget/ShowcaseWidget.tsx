import type { FC, ReactNode } from 'react'
import { useIsUltrawide } from '@/hooks/useMediaQuery'
import { Button } from '@concero/ui-kit'
import './ShowcaseWidget.pcss'

type ShowcaseWidgetProps = {
	title: string
	subtitle: string
	icon: ReactNode
	video: string
	integrationLink: string
	documentationLink: string
}

export const ShowcaseWidget: FC<ShowcaseWidgetProps> = ({
	title,
	subtitle,
	icon,
	video,
	integrationLink,
	documentationLink,
}): JSX.Element => {
	const isUltrwide = useIsUltrawide()
	const size = isUltrwide ? 'xl' : 'l'

	return (
		<div className="showcase_widget">
			<div className="showcase_widget_content">
				<div className="showcase_widget_icon_container">{icon}</div>
				<div className="showcase_widget_description">
					<div className="showcase_widget_text_container">
						<span className="showcase_widget_title">{title}</span>
						<span className="showcase_widget_subtitle">{subtitle}</span>
					</div>
					<div className="showcase_widget_actions">
						<Button
							size={size}
							variant="secondary_color"
							className="showcase_widget_button"
							onClick={() =>
								integrationLink && window.open(integrationLink, '_blank', 'noopener,noreferrer')
							}
						>
							Integrate
						</Button>
						<Button
							size={size}
							variant="secondary"
							className="showcase_widget_button"
							onClick={() =>
								documentationLink && window.open(documentationLink, '_blank', 'noopener,noreferrer')
							}
						>
							Documentation
						</Button>
					</div>
				</div>
			</div>
			<div className="showcase_widget_video_container">
				<video className="showcase_widget_video" autoPlay loop muted playsInline>
					<source src={video} type="video/mp4" />
				</video>
			</div>
		</div>
	)
}
