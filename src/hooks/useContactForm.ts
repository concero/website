import type { FormEvent, ChangeEvent, FocusEvent } from 'react'
import { useState, useCallback, useReducer, useMemo } from 'react'
import { useForm } from '@formspree/react'

enum FormField {
	Name = 'name',
	Project = 'project',
	ProjectLink = 'projectLink',
	TgHandle = 'tgHandle',
	Message = 'message',
}

type FormState = {
	values: Record<FormField, string>
	errors: Record<FormField, string>
	touched: Record<FormField, boolean>
}

type FormAction =
	| { type: 'SET_VALUE'; field: FormField; value: string }
	| { type: 'SET_ERROR'; field: FormField; error: string }
	| { type: 'SET_TOUCHED'; field: FormField }
	| { type: 'RESET' }

const initialFormState: FormState = {
	values: {
		[FormField.Name]: '',
		[FormField.Project]: '',
		[FormField.ProjectLink]: '',
		[FormField.TgHandle]: '',
		[FormField.Message]: '',
	},
	errors: {
		[FormField.Name]: '',
		[FormField.Project]: '',
		[FormField.ProjectLink]: '',
		[FormField.TgHandle]: '',
		[FormField.Message]: '',
	},
	touched: {
		[FormField.Name]: false,
		[FormField.Project]: false,
		[FormField.ProjectLink]: false,
		[FormField.TgHandle]: false,
		[FormField.Message]: false,
	},
}

const formReducer = (state: FormState, action: FormAction): FormState => {
	switch (action.type) {
		case 'SET_VALUE':
			return {
				...state,
				values: { ...state.values, [action.field]: action.value },
				errors: { ...state.errors, [action.field]: '' },
			}
		case 'SET_ERROR':
			return { ...state, errors: { ...state.errors, [action.field]: action.error } }
		case 'SET_TOUCHED':
			return { ...state, touched: { ...state.touched, [action.field]: true } }
		case 'RESET':
			return initialFormState
		default:
			return state
	}
}

const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/i
const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/

export const useContactForm = () => {
	const [state, dispatch] = useReducer(formReducer, initialFormState)
	const [formspreeState, handleSubmit, resetFormspree] = useForm('movwdlqv')
	const [isSubmitting, setIsSubmitting] = useState(false)

	const validateField = useCallback((field: FormField, value: string): string => {
		if (field === FormField.Message) {
			return ''
		}

		const fieldNameMap: Record<FormField, string> = {
			[FormField.Name]: 'Name',
			[FormField.Project]: 'Project',
			[FormField.ProjectLink]: 'Link to project',
			[FormField.TgHandle]: 'Telegram handle',
			[FormField.Message]: 'Message',
		}

		if (!value || !value.trim()) {
			return `${fieldNameMap[field]} is required`
		}

		switch (field) {
			case FormField.ProjectLink:
				if (value.trim() === '') return ''
				return urlRegex.test(value) ? '' : 'Please enter a valid URL'
			case FormField.TgHandle:
				const cleanHandle = value.startsWith('@') ? value.slice(1) : value
				return telegramRegex.test(cleanHandle) ? '' : '5-32 characters, letters/numbers/_ only'
			default:
				return ''
		}
	}, [])

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target
			const field = name as FormField

			if (field === FormField.TgHandle) {
				const cleanValue = value.replace(/[^a-zA-Z0-9_@]/g, '')
				dispatch({ type: 'SET_VALUE', field, value: cleanValue })
			} else {
				dispatch({ type: 'SET_VALUE', field, value })
			}

			// Validate already-touched fields on change
			if (state.touched[field]) {
				const valueToValidate = field === FormField.TgHandle ? value.replace(/^@/, '') : value
				const error = validateField(field, valueToValidate)
				if (error) {
					dispatch({ type: 'SET_ERROR', field, error })
				}
			}
		},
		[state.touched, validateField],
	)

	const handleBlur = useCallback(
		(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target
			const field = name as FormField

			if (!state.touched[field]) {
				dispatch({ type: 'SET_TOUCHED', field })
			}

			const error = validateField(field, value)
			dispatch({ type: 'SET_ERROR', field, error })
		},
		[state.touched, validateField],
	)

	const validateForm = useCallback(() => {
		let isValid = true
		const newErrors = { ...state.errors }

		Object.values(FormField).forEach(field => {
			const error = validateField(field, state.values[field])
			if (error) {
				newErrors[field] = error
				isValid = false
			}
			dispatch({ type: 'SET_ERROR', field, error })
		})

		return isValid
	}, [state.values, validateField])

	const onSubmit = useCallback(
		async (e: FormEvent) => {
			e.preventDefault()
			setIsSubmitting(true)

			if (validateForm()) {
				try {
					await handleSubmit(e as FormEvent<HTMLFormElement>)
				} catch (error) {}
			}

			setIsSubmitting(false)
		},
		[handleSubmit, validateForm],
	)

	const resetForm = useCallback(() => {
		dispatch({ type: 'RESET' })
		resetFormspree()
	}, [resetFormspree])

	const formContext = useMemo(
		() => ({
			values: state.values,
			errors: state.errors,
			touched: state.touched,
			status: {
				...formspreeState,
				isSubmitting,
				isValid: Object.values(state.errors).every(error => !error),
			},
			handleChange,
			handleBlur,
			onSubmit,
			resetForm,
		}),
		[state, formspreeState, isSubmitting, handleChange, handleBlur, onSubmit, resetForm],
	)

	return formContext
}
