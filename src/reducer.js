export const initialState = {
    cart: []
};

// Selector
export const getCartTotal = (cart) =>
    cart.reducer((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (item) => item.id === action.id
            );
            let newCart = [...state.cart];
            
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.log("Can't remove product as it is not in Cart");
            }

            return {
                ...state,
                cart: newCart
            }

            default:
                return state;
    }
}

export default reducer;