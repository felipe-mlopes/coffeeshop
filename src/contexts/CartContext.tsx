import { createContext, ReactNode, useState } from "react";
import { CardProps } from "../components/Card";
import { CartProps, DataProps } from "../types/data";

interface CartContextProps {
  children: ReactNode
}

interface CartTypes extends CartProps {
  amount: number
}

interface ItemsTypes {
  cart: CartTypes[],
  setCart: (newCart: CartTypes[]) => void,
  addItemsToCart: (data: CartTypes, amountItems: number) => void,
}

export const CartContext = createContext({} as ItemsTypes)

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<CartTypes[]>([])
  
  function addItemsToCart(data: CartProps, amountItems: number) {
    const newCart: CartTypes = {
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      amount: amountItems
    }
    
    const storageCart = JSON.stringify([...cart, newCart])
    localStorage.setItem('itemToCart', storageCart)
    
    setCart(state => [...state, newCart])
  }

//  async function fetchItemsToCart() {
//     const response = await localStorage.getItem('itemToCart')
//     const items = response ? JSON.parse(response) : {}

//     setCartItens([items])
//   }
  
  return (
    <CartContext.Provider value={{ cart, setCart, addItemsToCart }} >
      {children}
    </CartContext.Provider>
  )
}