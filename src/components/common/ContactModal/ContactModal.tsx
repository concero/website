import type { FC } from 'react'
import { useEffect } from 'react'
import { CloseIcon } from '@/assets/icons/close'
import { useContactForm } from '@/hooks/useContactForm'
import { Input } from '@concero/ui-kit'
import { WarningIcon } from '@/assets/icons/warning'
import './ContactModal.pcss'

type ContactModalProps = {
	isOpen: boolean
	onClose: () => void
}

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
	const { values, errors, handleChange, onSubmit, resetForm } = useContactForm()

	const handleClose = () => {
		resetForm()
		onClose()
	}

	useEffect(() => {
		if (isOpen) {
			const originalOverflow = document.body.style.overflow
			document.body.style.overflow = 'hidden'
			return () => {
				document.body.style.overflow = originalOverflow
			}
		}
	}, [isOpen])

	if (!isOpen) {
		return null
	}

	return (
		<div className="contact_modal_overlay">
			<div className="contact_modal_container">
				<div className="contact_modal_header">
					<span className="contact_modal_title">Contact us</span>
					<div className="contact_modal_close" onClick={handleClose}>
						<CloseIcon />
					</div>
				</div>
				<form className="contact_modal_form" onSubmit={onSubmit}>
					<div className="contact_modal_input_elem">
						<span className="contact_modal_label">Name</span>
						<Input
							value={values.name}
							onChange={handleChange}
							isError={!!errors.name}
							placeholder="Enter your name"
							size="l"
							inputProps={{
								name: 'name',
								autoComplete: 'name',
							}}
						/>
						{errors.name && (
							<div className="contact_modal_error">
								<WarningIcon />
								<span>{errors.name}</span>
							</div>
						)}
					</div>
					<div className="contact_modal_input_elem">
						<span className="contact_modal_label">Project</span>
						<Input
							value={values.project}
							onChange={handleChange}
							isError={!!errors.project}
							placeholder="Project name"
							size="l"
							inputProps={{
								name: 'project',
								autoComplete: 'off',
							}}
						/>
						{errors.project && (
							<div className="contact_modal_error">
								<WarningIcon />
								<span>{errors.project}</span>
							</div>
						)}
					</div>
					<div className="contact_modal_input_elem">
						<span className="contact_modal_label">Link to project</span>
						<Input
							value={values.projectLink}
							onChange={handleChange}
							isError={!!errors.projectLink}
							placeholder="project.com"
							size="l"
							inputProps={{
								name: 'projectLink',
								type: 'url',
								autoComplete: 'url',
							}}
						/>
						{errors.projectLink && (
							<div className="contact_modal_error">
								<WarningIcon />
								<span>{errors.projectLink}</span>
							</div>
						)}
					</div>
					<div className="contact_modal_input_elem">
						<span className="contact_modal_label">Telegram handle</span>
						<Input
							value={values.tgHandle}
							onChange={handleChange}
							isError={!!errors.tgHandle}
							placeholder="@yourhandle"
							size="l"
							inputProps={{
								name: 'tgHandle',
								autoComplete: 'off',
							}}
						/>
						{errors.tgHandle && (
							<div className="contact_modal_error">
								<WarningIcon />
								<span>{errors.tgHandle}</span>
							</div>
						)}
					</div>
					<div className="contact_modal_input_elem">
						<span className="contact_modal_label">Message</span>
						<Input
							value={values.message}
							onChange={handleChange}
							isError={!!errors.message}
							hintText={errors.message || ''}
							placeholder="Type your message here"
							size="l"
							inputProps={{
								name: 'message',
								autoComplete: 'off',
							}}
						/>
						{errors.message && (
							<div className="contact_modal_error">
								<WarningIcon />
								<span>{errors.message}</span>
							</div>
						)}
					</div>
					<button type="submit" className="contact_modal_button">
						Send Message
					</button>
				</form>
			</div>
		</div>
	)
}
