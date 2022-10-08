import { MapPin, ShoppingCart } from 'phosphor-react'
import { Actions, NavContainer, Location, CartWrapper } from './styles'
import Logo from '../../assets/Logo.svg'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export interface NavbarProps {
  counter?: number
}

export function Navbar() {
  const { cart, handleFetchStorageCart } = useContext(CartContext)

  useEffect(() => {
    handleFetchStorageCart()
  }, [])

  const amountItensToCart = cart.reduce((acc: any, item: any) => {
    return acc += item.amount
  }, 0)

  return (
    <NavContainer>
      <Link to={`/`} >
        <img src={Logo} alt="logomarca" />
      </Link>
      <Actions>
        <Location>
          <MapPin size={18} color="#8047F8" weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <Link to={`/checkout`} >
          <CartWrapper counter={amountItensToCart} >
            <ShoppingCart size={18} color="#C47F17" weight="fill" />
          </CartWrapper>
        </Link>
      </Actions>

    </NavContainer>
  )
}