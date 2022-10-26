import { createContext, ReactNode, useState } from "react";
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
  amountItems: number,
  setAmountItems: (newAmount: number) => void,
  increaseAmount: (id: number) => void,
  decreaseAmount: (id: number) => void,
  filterTagSelected: (types: string[]) => void,
  tagSelected: string[],
  setTagSelected: (type: string[]) => void
}

export const CartContext = createContext({} as ItemsTypes)

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<CartTypes[]>([])
  const [amountItems, setAmountItems] = useState(1)
  const [tagSelected, setTagSelected] = useState([])

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
        amount: item.amount + amountItems
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

  function increaseAmount(id: number) {
    cart.map(item => item.id === id) && setAmountItems(state => { return state + 1 })
  }

  function decreaseAmount(id: number) {
    if(amountItems > 1) {
      cart.map(item => item.id === id) && 
      setAmountItems(state => { return state - 1 })
    }
  }

  function filterTagSelected(types: string[]) {
    setTagSelected(state => [...state, types])
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      setCart, 
      addItemsToCart, 
      handleFetchStorageCart, 
      deleteItemToCart,
      amountItems,
      setAmountItems,
      increaseAmount,
      decreaseAmount,
      filterTagSelected,
      tagSelected,
      setTagSelected
      }} >
      {children}
    </CartContext.Provider>
  )
}