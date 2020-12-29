export const initialState = {
  basket: [], // Currrent shopping basket
  user: null // Current user who log-in
};

// Get the total amount inthe basket
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item] // adding new item to the basket
      };
    case "REMOVE_FROM_BASKET": 
      // Find the index of the element has the same id
      const index = state.basket.findIndex((element) => element.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its not in the basket!`);
      }
      return {
        ...state,
        basket: newBasket
      };
    case "EMPTY_BASKET": 
      return {
        ...state,
        basket: []
      }
    case "SET_USER": 
      return {
        ...state,
        user: action.user
      }
    default:
      return state;      
  }
};

export default reducer;