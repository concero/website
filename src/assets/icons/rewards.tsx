import type { FC } from 'react'

type RewardsIconProps = {
    color?: string
}

export const RewardsIcon: FC<RewardsIconProps> = ({ color = '#66767D' }): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 1.8H5.39998V10.8C5.39998 11.7941 6.20586 12.6 7.19998 12.6H10.8C11.7941 12.6 12.6 11.7941 12.6 10.8V1.8ZM3.59998 0V10.8C3.59998 12.7882 5.21175 14.4 7.19998 14.4H10.8C12.7882 14.4 14.4 12.7882 14.4 10.8V0H3.59998Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4 8.99999L15.3 8.99999C15.7971 8.99999 16.2 8.59704 16.2 8.09999L16.2 4.49999C16.2 4.00293 15.7971 3.59999 15.3 3.59999L14.4 3.59999L14.4 1.79999L15.3 1.79999C16.7912 1.79999 18 3.00882 18 4.49999L18 8.09999C18 9.59116 16.7912 10.8 15.3 10.8L14.4 10.8L14.4 8.99999Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 3.59999L2.69998 3.59999C2.20292 3.59999 1.79998 4.00293 1.79998 4.49999L1.79998 8.09999C1.79998 8.59704 2.20292 8.99999 2.69998 8.99999L3.59998 8.99999L3.59998 10.8L2.69998 10.8C1.20881 10.8 -2.45544e-05 9.59116 -2.44892e-05 8.09999L-2.43318e-05 4.49999C-2.42666e-05 3.00882 1.20881 1.79999 2.69998 1.79999L3.59998 1.79999L3.59998 3.59999Z" fill={color}/>
            <rect x="8.09998" y="12.6" width="1.8" height="5.4" rx="0.9" fill={color}/>
            <rect x="14.4" y="16.2" width="1.8" height="10.8" rx="0.899999" transform="rotate(90 14.4 16.2)" fill={color}/>
        </svg>
    )
}