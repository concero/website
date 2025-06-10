import type { FC, ReactNode } from 'react'
import './InfoWidget.pcss'

type InfoWidgetProps = {
	title: string
	subtitle: string
	icon: ReactNode
}

export const InfoWidget: FC<InfoWidgetProps> = ({ title, subtitle, icon }): JSX.Element => {
	return (
		<div className="info_widget">
			<div className="info_widget_icon_container">{icon}</div>
			<div className="info_widget_content">
				<span className="info_widget_title">{title}</span>
				<span className="info_widget_subtitle">{subtitle}</span>
			</div>
		</div>
	)
}
