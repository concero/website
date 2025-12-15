import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import cls from './Text.module.scss'
import type { TFontVariant, TTextTag } from './types'
type OmitTyped<Obj extends object, Keys extends keyof Obj> = Omit<Obj, Keys>

type TTextProps = {
	variant?: TFontVariant
	className?: string
	children: ReactNode
	ellipsis?: boolean
	as?: TTextTag
	htmlProps?: OmitTyped<HTMLAttributes<HTMLElement>, 'className' | 'children'>
}

export const Text = (props: TTextProps) => {
	const { className, ellipsis, variant, children, as: Tag = 'span', htmlProps } = props

	return (
		<Tag
			className={clsx({ [cls.ellipsis]: ellipsis }, { [cls[variant ?? '']]: Boolean(variant) }, className)}
			{...htmlProps}
		>
			{children}
		</Tag>
	)
}
