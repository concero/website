import type { FC, ReactNode, ReactElement } from 'react';
import { memo } from 'react';
import './DataWidget.pcss';

type DataWidgetProps = {
    title: string;
    data: string;
    icon: ReactNode;
}

export const DataWidget: FC<DataWidgetProps> = memo(({ title, data, icon }): ReactElement => {
    return (
        <article className="data_widget">
            <div className="data_widget_content">
                <div className="data_widget_icon_container" aria-hidden="true">
                    {icon}
                </div>
                <h4 className="data_widget_title">{title}</h4>
            </div>
            <p className="data_widget_data">{data}</p>
        </article>
    );
});
