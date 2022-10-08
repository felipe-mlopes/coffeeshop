import { createContext, ReactNode, useState } from "react";
import { CartProps } from "../types/data";

interface CartContextProps {
  children: ReactNode
}

export interface CartTypes extends CartProps {
  amount: number,
  itemTotalPrice: number
}

interface ItemsTypes {
  cart: CartTypes[],
  setCart: (newCart: CartTypes[]) => void,
  addItemsToCart: (data: CartTypes) => void,
  handleFetchStorageCart: () => void,
  deleteItemToCart: (id: number) => void
}

export const CartContext = createContext({} as ItemsTypes)

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<CartTypes[]>([])
  
  async function addItemsToCart(data: CartTypes) {
    const totalPrice = data.price * data.amount
    const newCart: CartTypes = {
      id: data.id,
      name: data.name,
      image: data.image,
      amount: data.amount,
      price: data.price,
      itemTotalPrice: totalPrice
    }
    
    const response = await localStorage.getItem('itemToCart')
    const previousCart = response ? JSON.parse(response) : []
    const storageCart = JSON.stringify([...previousCart, newCart])

    localStorage.setItem('itemToCart', storageCart)
    setCart(state => [...state, newCart])
  }

  async function handleFetchStorageCart() {
    const response = await localStorage.getItem('itemToCart')
    const items = response ? JSON.parse(response) : []
    
    setCart(items)
  }

  async function deleteItemToCart(id: number) {
    const response = await localStorage.getItem('itemToCart')
    const items = response ? JSON.parse(response) : []
    const newData = items.filter((item: CartTypes) => 
      item.id !== id 
      )
    
    localStorage.setItem('itemToCart', JSON.stringify(newData))
    setCart(newData)
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItemsToCart, handleFetchStorageCart, deleteItemToCart}} >
      {children}
    </CartContext.Provider>
  )
}