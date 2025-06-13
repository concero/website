import { createContext, useContext } from 'react';
import { ModalState, ModalAction } from './modalReducer';

export const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<ModalAction>;
}>({
  state: {
    contact: false,
    brandAssets: false,
    chains: false,
    modalProps: {},
  },
  dispatch: () => null,
});

export const useModalContext = () => useContext(ModalContext);
