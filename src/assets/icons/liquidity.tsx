import type { FC } from 'react'

type LiquidityIconProps = {
    color?: string
}

export const LiquidityIcon: FC<LiquidityIconProps> = ({ color = '#66767D' }): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.1C0 16.603 0.402944 16.2 0.9 16.2H17.1C17.5971 16.2 18 16.603 18 17.1C18 17.5971 17.5971 18 17.1 18H0.9C0.402944 18 0 17.5971 0 17.1Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.19999C0 6.70293 0.402944 6.29999 0.9 6.29999H3.9C4.39706 6.29999 4.8 6.70293 4.8 7.19999V14.4C4.8 14.897 4.39706 15.3 3.9 15.3H0.9C0.402944 15.3 0 14.897 0 14.4V7.19999ZM1.8 8.09999V13.5H3V8.09999H1.8Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2 0.9C13.2 0.402944 13.603 0 14.1 0H17.1C17.5971 0 18 0.402944 18 0.9V14.4C18 14.8971 17.5971 15.3 17.1 15.3H14.1C13.603 15.3 13.2 14.8971 13.2 14.4V0.9ZM15 1.8V13.5H16.2V1.8H15Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.49998C6 4.00292 6.53726 3.59998 7.2 3.59998H11.3C11.9627 3.59998 12.5 4.00292 12.5 4.49998V14.4C12.5 14.897 11.9627 15.3 11.3 15.3H7.2C6.53726 15.3 6 14.897 6 14.4V4.49998ZM8.4 5.39998V13.5H10.1V5.39998H8.4Z" fill={color}/>
        </svg>
    )
}