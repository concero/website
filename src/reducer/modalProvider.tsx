import { useReducer, ReactNode } from 'react';
import { ModalContext } from './modalContext';
import { modalReducer, initialState } from './modalReducer';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
