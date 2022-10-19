import { useContext } from "react";

import { Tag } from "../../components/Tag";
import { CartContext, CartTypes } from "../../contexts/CartContext";
import { DataProps } from "../../types/data";

import { CardContainer, DescriptionWrapper, CartWrapper, PriceWrapper, ActionsWrapper, ShopCartWrapper, CounterWrapper, TagWrapper, MinusIcon, PlusIcon, ShoppingCartIcon, CoffeeImage } from "./styles";

export function Card({ id, name, image, description, tags, price }: DataProps, { itemTotalPrice }: CartTypes) {
  const { addItemsToCart, amountItems, increaseAmount, decreaseAmount } = useContext(CartContext)
  
  const handleAdd = () => {
    addItemsToCart({
      id: id,
      name: name,
      image: image,
      tags: tags,
      amount: amountItems,
      price: price,
      itemTotalPrice: itemTotalPrice
    })
  }  

  const handleIncreaseAmount = () => {
    increaseAmount(id)
  }

  const handleDecreaseAmount = () => {
    decreaseAmount(id)
  }

  return (
    <CardContainer>
      <CoffeeImage>
        <img src={image} />
      </CoffeeImage>
      <TagWrapper>
        {tags.map(item => {
          return (
            <Tag 
              key={item}
              type={item}
              variant="tagCard"
            />
          )})}
      </TagWrapper>
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