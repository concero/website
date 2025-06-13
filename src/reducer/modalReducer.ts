export type ModalState = {
  contact: boolean;
  brandAssets: boolean;
  chains: boolean;
  modalProps: Record<string, unknown>;
};

export type ModalAction =
  | { type: 'OPEN_CONTACT' }
  | { type: 'CLOSE_CONTACT' }
  | { type: 'OPEN_BRAND_ASSETS' }
  | { type: 'CLOSE_BRAND_ASSETS' }
  | { type: 'OPEN_CHAINS' }
  | { type: 'CLOSE_CHAINS' };

  export const initialState: ModalState = {
  contact: false,
  brandAssets: false,
  chains: false,
  modalProps: {},
};

export const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_CONTACT':
      return { ...state, contact: true };
    case 'CLOSE_CONTACT':
      return { ...state, contact: false };
    case 'OPEN_BRAND_ASSETS':
      return { ...state, brandAssets: true };
    case 'CLOSE_BRAND_ASSETS':
      return { ...state, brandAssets: false };
    case 'OPEN_CHAINS':
      return { ...state, chains: true };
    case 'CLOSE_CHAINS':
      return { ...state, chains: false };
    default:
      return state;
  }
};
