import type { FC, ReactNode } from 'react'
import './DataWidget.pcss'

type DataWidgetProps = {
	title: string
	data: string
	icon: ReactNode
}

export const DataWidget: FC<DataWidgetProps> = ({ title, data, icon }): JSX.Element => {
	return (
		<div className="data_widget">
			<div className="data_widget_content">
				<div className="data_widget_icon_container">{icon}</div>
				<span className="data_widget_title">{title}</span>
			</div>
			<span className="data_widget_data">{data}</span>
		</div>
	)
}
