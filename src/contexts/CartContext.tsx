import { createContext, ReactNode, useState } from "react";
import { FormTypes } from "../pages/Checkout";
import { DataProps } from "../types/data";

interface CartContextProps {
  children: ReactNode
}

export interface CartTypes extends DataProps {
  amount: number,
  itemTotalPrice?: number
}

interface ItemsTypes {
  cart: CartTypes[],
  setCart: (newCart: CartTypes[]) => void,
  addItemsToCart: (data: CartTypes) => void,
  handleFetchStorageCart: () => void,
  deleteItemToCart: (id: number) => void,
  increaseItemQuantity: (cartItemId: number) => void,
  decreaseItemQuantity: (id: number) => void,
  tagSelected: string[],
  setTagSelected: (type: string[]) => void,
  filterTagSelected: (type: string) => void,
  addressData: FormTypes,
  setAddressData: (data: FormTypes) => void
}

export const CartContext = createContext({} as ItemsTypes)

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<CartTypes[]>([])
  const [tagSelected, setTagSelected] = useState([''])
  const [addressData, setAddressData] = useState<FormTypes>()

  async function addItemsToCart(data: CartTypes) {
    const itemAlreadyInCart = cart.find(item => item.id === data.id)

    const totalPrice = data.price * data.amount

    const newCart: CartTypes = {
      id: data.id,
      name: data.name,
      image: data.image,
      tags: data.tags,
      amount: data.amount,
      price: data.price,
      itemTotalPrice: totalPrice
    }
    
    const response = await localStorage.getItem('itemsToCart')
    const previousCart = response ? JSON.parse(response) : []
    const storageCart = JSON.stringify([...previousCart, newCart])

    if(!itemAlreadyInCart) {
      localStorage.setItem('itemsToCart', storageCart)
      setCart(state => [...state, newCart])
    } else {
      const updateCart = cart.map(item => item.id === data.id ? {
        ...item,
        amount: item.amount + data.amount
      } : item)
      
      setCart(updateCart)
      localStorage.setItem('itemsToCart', JSON.stringify(updateCart))
    }
  }

  async function handleFetchStorageCart() {
    const response = await localStorage.getItem('itemsToCart')
    const items = response ? JSON.parse(response) : []
    
    setCart(items)
  }

  async function deleteItemToCart(id: number) {
    const response = await localStorage.getItem('itemsToCart')
    const items = response ? JSON.parse(response) : []
    const newData = items.filter((item: CartTypes) => 
      item.id !== id )
    
    localStorage.setItem('itemsToCart', JSON.stringify(newData))
    setCart(newData)
  }

  function increaseItemQuantity(cartItemId: number) {
    const updateCart = cart.map(item => item.id === cartItemId ? {
      ...item,
      amount: item.amount + 1
    } : item)

    setCart(updateCart)
    localStorage.setItem('itemsToCart', JSON.stringify(updateCart))
  }

  function decreaseItemQuantity(cartItemId: number) {
    const updateCart = cart.map(item => (item.id === cartItemId && item.amount > 1) ? {
      ...item,
      amount: item.amount - 1
    } : item)

    setCart(updateCart)
    localStorage.setItem('itemsToCart', JSON.stringify(updateCart))
  }

  function filterTagSelected(type: string) {
    setTagSelected(state => [...state, type])
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      setCart, 
      addItemsToCart,
      handleFetchStorageCart,  
      deleteItemToCart,
      increaseItemQuantity,
      decreaseItemQuantity,
      tagSelected,
      setTagSelected,
      filterTagSelected,
      addressData,
      setAddressData
      }} >
      {children}
    </CartContext.Provider>
  )
}