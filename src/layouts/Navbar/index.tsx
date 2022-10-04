import { MapPin, ShoppingCart } from 'phosphor-react'
import { Actions, NavContainer, Location, CartWrapper } from './styles'
import Logo from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export interface NavbarProps {
  counter?: number
}

export function Navbar() {
  const { cart } = useContext(CartContext)

  const amountItensToCart = cart.reduce((acc, item) => {
    return acc += item.amount
  }, 0)

  return (
    <NavContainer>
      <img src={Logo} alt="logomarca" />
      <Actions>
        <Location>
          <MapPin size={18} color="#8047F8" weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <CartWrapper counter={amountItensToCart} >
          <ShoppingCart size={18} color="#C47F17" weight="fill" />
        </CartWrapper>
      </Actions>

    </NavContainer>
  )
}