import { FC, memo } from 'react'
import { useModalContext } from '@/reducer/modalContext'
import { ContactModal } from '../ContactModal/ContactModal'
import { BrandModal } from '../BrandModal/BrandModal'
import { ChainsModal } from '../ChainsModal/ChainsModal'

export const ModalManager: FC = memo((): JSX.Element => {
    const { state, dispatch } = useModalContext()

    const closeContactModal = () => {
        dispatch({ type: 'CLOSE_CONTACT' })
    }

    const closeBrandModal = () => {
        dispatch({ type: 'CLOSE_BRAND_ASSETS' })
    }

    const closeChainsModal = () => {
        dispatch({ type: 'CLOSE_CHAINS' })
    }

    return (
        <>
            {state.contact && (
                <ContactModal
                    isOpen={state.contact}
                    onClose={closeContactModal}
                />
            )}

            {state.brandAssets && (
                <BrandModal
                    isOpen={state.brandAssets} 
                    onClose={closeBrandModal}
                />
            )}

            {state.chains && (
                <ChainsModal
                    isOpen={state.chains}
                    onClose={closeChainsModal}
                />
            )}
        </>
    )
})