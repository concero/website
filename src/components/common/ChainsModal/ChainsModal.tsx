import type { FC } from 'react'
import { useEffect } from 'react'
import { CloseIcon } from '@/assets/icons/close'
import { Input } from '@concero/ui-kit'
import { SearchIcon } from '@/assets/icons/search'
import './ChainsModal.pcss'

type ChainsModalProps = {
	isOpen: boolean
	onClose: () => void
}

export const ChainsModal: FC<ChainsModalProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (!isOpen) return
		const originalOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className="chains_modal_overlay" role="dialog" aria-modal="true">
			<div className="chains_modal_container">
				<div className="chains_modal_header">
					<span className="chains_modal_title">Chains</span>
					<div
						className="chains_modal_close"
						onClick={onClose}
						role="button"
						tabIndex={0}
						aria-label="Close modal"
						onKeyDown={e => {
							if (e.key === 'Enter' || e.key === ' ') onClose()
						}}
					>
						<CloseIcon />
					</div>
				</div>
				<div className="chains_modal_search">
					<Input
						placeholder="Search chain"
						className="chains_modal_search_input"
						size="xl"
						icon={<SearchIcon />}
						onChange={() => {}}
					/>
				</div>
			</div>
		</div>
	)
}
