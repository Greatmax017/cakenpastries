import { StateCreator } from "zustand"
import { cartSlice } from "@/interfaces/createCartSlice.interface"
import { Products } from "@/interfaces/crateProductSlice.interface"

export const createCartSlice: StateCreator<cartSlice> = (set, get) => ({
    cart: [],
    addToCart: (product: Products) => {
        const cart = get().cart;
        const findProduct = cart.find((p) => p.id === product.id)

        if (findProduct ) {
            findProduct.quantity! += 1
        
        } else {
            cart.push({...product, quantity: 1})
        }

        set({ cart })
        console.log(cart)

    },
    removeFromCart: (productId: string) => {
        set({cart: get().cart.filter(product => product.id === productId)})
    },
    updateQuantity: (productId: string, action: 'increase' | 'decrease') => {
        const cart = get().cart;
        const findProduct = cart.find(p => p.id === productId);

        if (findProduct) {
            if (action === 'increase') {
                findProduct.quantity! > 1 ? findProduct.quantity! -  1 : findProduct.quantity!
            }
            else {
                findProduct.quantity! += 1
            }
        }
        set({ cart })
    },
    showCart: false, 
    toggleCart: () => {
        set({ showCart: !get().cart })
    }
})