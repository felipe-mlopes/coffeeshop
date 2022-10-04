import { useContext, useState } from "react";
import { Tag } from "../../components/Tag";
import { CartContext } from "../../contexts/CartContext";
import { DataProps } from "../../types/data";
import { CardContainer, DescriptionWrapper, CartWrapper, PriceWrapper, ActionsWrapper, ShopCartWrapper, CounterWrapper, TagWrapper, MinusIcon, PlusIcon, ShoppingCartIcon, CoffeeImage } from "./styles";

export interface CardProps {
  amountItems: number
}

export function Card({ id, name, image, description, tags, price }: DataProps) {
  const { cart, addItemsToCart } = useContext(CartContext)
  const [amountItems, setAmountItens] = useState(1)

  const handleAdd = () => {
    addItemsToCart({
      id: id,
      name: name,
      image: image,
      price: price,
      amount: amountItems,

    })
  }

  const handleDecreaseAmount = () => {
    const decreaseAmount = amountItems - 1
    amountItems - 1 && setAmountItens(decreaseAmount)
  }

  const handleIncreaseAmount = () => {
    const increaseAmount = amountItems + 1
    setAmountItens(increaseAmount)
  }

  console.log(cart)

  return (
    <CardContainer>
      <CoffeeImage>
        <img src={image} />
      </CoffeeImage>
      {/* <TagWrapper>
        {tags.map(item => {
          return (
            <Tag 
              key={item}
              type={item}
              variant="tagCard" 
            />
          )})}
      </TagWrapper> */}
      <DescriptionWrapper>
        <h4>{name}</h4>
        <p>{description}</p>
      </DescriptionWrapper> 
      <CartWrapper>
        <PriceWrapper><span>R$ </span>{price.toFixed(2)}</PriceWrapper>
        <ActionsWrapper>
          <CounterWrapper>
            <MinusIcon size={16} weight="bold" onClick={handleDecreaseAmount} />
            <p>{amountItems}</p>
            <PlusIcon size={16} weight="bold" onClick={handleIncreaseAmount} />
          </CounterWrapper>
          <ShopCartWrapper onClick={handleAdd}>
            <ShoppingCartIcon size={18} weight="fill" />
          </ShopCartWrapper>
        </ActionsWrapper>
      </CartWrapper>
    </CardContainer>
  )
}