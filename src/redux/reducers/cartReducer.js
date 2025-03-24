import actionTypes from "../actionTypes";
const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //YÜKLENME

    case actionTypes.CART_LOADING:
      return { ...state, isLoading: true };
    //HATA
    case actionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };
    //BAŞARI DURUMU
    case actionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: payload };
    //ELEMAN EKLE
    case actionTypes.CREATE_ITEM:
      return { ...state, cart: state.cart.concat(payload) };
    //ELEMAN GÜNCELLE
    case actionTypes.UPDATE_ITEM:
      const updated = state.cart.map((i) =>
        i.id === payload.id ? payload : i
      );
      return { ...state, cart: updated };
    //ELEMANI SİL
    case actionTypes.DELETE_ITEM:
      const filtred = state.cart.filter((i) => i.id != payload);
      return { ...state, cart: filtred };
    default:
      return state;
  }
};

export default cartReducer;
