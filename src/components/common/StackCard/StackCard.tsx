import type { FC, ReactElement } from 'react'
import './StackCard.pcss'

type StackCardProps = {
  title: string
  number: ReactElement
  isDark?: boolean
}

export const StackCard: FC<StackCardProps> = ({ title, number, isDark = false }) => {
  const theme: string = isDark ? 'dark' : 'light'

  return (
    <div className={`stack_card stack_card_${theme}`}>
      <div className="stack_card_content">
        <span className={`stack_card_title stack_card_title_${theme}`}>{title}</span>
        <span className={`stack_card_number stack_card_number_${theme}`}>{number}</span>
      </div>
    </div>
  )
}
