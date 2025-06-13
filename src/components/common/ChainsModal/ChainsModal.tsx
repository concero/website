import type { FC, KeyboardEvent, ChangeEvent } from 'react'
import type { Chain as ChainType } from '@/configuration/chains'
import { useEffect, useMemo, useState, useCallback } from 'react'
import { CloseIcon } from '@/assets/icons/close'
import { Input } from '@concero/ui-kit'
import { SearchIcon } from '@/assets/icons/search'
import { Chain } from '../Chain/Chain'
import { chains as allChains } from '@/configuration/chains'
import { NoChains } from '../NoChains/NoChains'
import './ChainsModal.pcss'

type ChainsModalProps = {
	isOpen: boolean
	onClose: () => void
}

type ChainsGrouped = Record<string, ChainType[]>

export const ChainsModal: FC<ChainsModalProps> = ({ isOpen, onClose }) => {
	const [search, setSearch] = useState<string>('')

	useEffect(() => {
		if (!isOpen) return
		const originalOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [isOpen])

	const filteredChains = useMemo(() => {
		const query = search.trim().toLowerCase()
		if (!query) return allChains
		return allChains.filter(chain => chain.name.toLowerCase().includes(query))
	}, [search])

	const chainsByLetter = useMemo<ChainsGrouped>(() => {
		const grouped: ChainsGrouped = {}
		filteredChains
			.slice()
			.sort((a, b) => a.name.localeCompare(b.name))
			.forEach(chain => {
				const firstChar = chain.name.charAt(0).toUpperCase()
				const letter = /^[A-Z]$/.test(firstChar) ? firstChar : '#'
				if (!grouped[letter]) grouped[letter] = []
				grouped[letter].push(chain)
			})
		return grouped
	}, [filteredChains])

	const letterKeys = useMemo(() => {
		const keys = Object.keys(chainsByLetter).sort()
		if (keys.includes('#')) {
			keys.splice(keys.indexOf('#'), 1)
			keys.push('#')
		}
		return keys
	}, [chainsByLetter])

	const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}, [])

	const handleCloseKeyDown = useCallback(
		(e: KeyboardEvent<HTMLDivElement>) => {
			if (e.key === 'Enter' || e.key === ' ') onClose()
		},
		[onClose],
	)

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
						onKeyDown={handleCloseKeyDown}
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
						value={search}
						onChange={handleSearchChange}
					/>
				</div>
				<div className="chains_modal_content">
					{letterKeys.length === 0 ? (
						<NoChains/>
					) : (
						letterKeys.map(letter => (
							<div key={letter} className="chains_modal_category">
								<span className="chains_modal_category_title">{letter}</span>
								<div className="chains_modal_category_chains">
									{chainsByLetter[letter].map((chain, index, array) => (
										<div key={chain.name} className="chains_modal_chain_wrapper">
											<Chain name={chain.name} logo={chain.logoUrl} />
											{index < array.length && <div className="chains_modal_divider" />}
										</div>
									))}
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}
