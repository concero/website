import type { FC } from 'react'
import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@/assets/icons/close'
import { useContactForm } from '@/hooks/useContactForm'
import { Input } from '@concero/ui-kit'
import { WarningIcon } from '@/assets/icons/warning'
import { Success } from './Success/Success'
import { OpenTrail } from '@/assets/icons/openTrail'
import './ContactModal.pcss'

type ContactModalProps = {
    isOpen: boolean
    onClose: () => void
}

const PROJECT_OPTIONS = [
    'Relayer Network',
    'Verifier Network',
    'RPC Provider',
    'Chain',
    'Other',
]

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const { values, errors, status, handleChange, onSubmit, resetForm, setValues } = useContactForm()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleClose = () => {
        resetForm()
        onClose()
    }

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    const handleInputClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleOptionSelect = (option: string) => {
        setValues({ whoareyou: option })
        setIsDropdownOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isDropdownOpen])

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

    if (status.succeeded) {
        return createPortal(
            <div className="contact_modal_overlay" onClick={handleOverlayClick}>
                <div className="contact_modal_container">
                    <Success onBack={handleClose} />
                </div>
            </div>,
            document.body,
        )
    }

    return createPortal(
        <div className="contact_modal_overlay" onClick={handleOverlayClick}>
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
                        <span className="contact_modal_label">Email</span>
                        <Input
                            value={values.email}
                            onChange={handleChange}
                            isError={!!errors.email}
                            placeholder="Enter your email"
                            size="l"
                            inputProps={{
                                name: 'email',
                                type: 'email',
                                autoComplete: 'email',
                            }}
                        />
                        {errors.email && (
                            <div className="contact_modal_error">
                                <WarningIcon />
                                <span>{errors.email}</span>
                            </div>
                        )}
                    </div>
                    <div className="contact_modal_input_elem" ref={dropdownRef}>
                        <span className="contact_modal_label">Who are you?</span>
                        <div onClick={handleInputClick}>
                            <Input
                                value={values.whoareyou}
                                onChange={() => {}}
                                isError={!!errors.whoareyou}
                                placeholder="Select Your Role"
                                size="l"
                                className={`contact_modal_dropdown_input ${isDropdownOpen ? 'contact_modal_dropdown_input_open' : ''}`}
                                inputProps={{
                                    name: 'project',
                                    autoComplete: 'off',
                                    readOnly: true,
                                }}
                                icon={<OpenTrail />}
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="contact_modal_dropdown">
                                {PROJECT_OPTIONS.map((option) => (
                                    <div
                                        key={option}
                                        className="contact_modal_dropdown_item"
                                        onClick={() => handleOptionSelect(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors.whoareyou && (
                            <div className="contact_modal_error">
                                <WarningIcon />
                                <span>{errors.whoareyou}</span>
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
                        <span className="contact_modal_label">Tg handle</span>
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
                        <span className="contact_modal_label">
                            Message <span>{'(Optional)'}</span>
                        </span>
                        <Input.TextArea
                            value={values.message}
                            onChange={handleChange}
                            isError={!!errors.message}
                            hintText={errors.message || ''}
                            placeholder="Type your message here"
                            size="xl"
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
                    <div className="contact_modal_button_container">
                        <button type="submit" className="contact_modal_button">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body,
    )
}
