import { useContext, useState } from "react";

import { CartContext, CartTypes } from "../../../../contexts/CartContext";
import { DataProps } from "../../../../types/data";
import { formatMoney } from "../../../../utils/formatMoney";
import { Tag } from "../Tag";

import { CardContainer, DescriptionWrapper, CartWrapper, PriceWrapper, ActionsWrapper, ShopCartWrapper, CounterWrapper, TagWrapper, MinusIcon, PlusIcon, ShoppingCartIcon, CoffeeImage } from "./styles";

export function Card({ id, name, image, description, tags, price }: DataProps, { itemTotalPrice }: CartTypes) {
  const { addItemsToCart } = useContext(CartContext)
  const [amountItem, setAmountItem] = useState(1)
  
  const handleAdd = () => {
    addItemsToCart({
      id: id,
      name: name,
      image: image,
      tags: tags,
      amount: amountItem,
      price: price,
      itemTotalPrice: itemTotalPrice
    })
  }  

  const handleIncreaseAmount = () => {
    setAmountItem(state => state + 1)
  }

  const handleDecreaseAmount = () => {
    if(amountItem > 1) {
      setAmountItem(state => state - 1)
    }
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
        <PriceWrapper><span>R$ </span>{formatMoney(price)}</PriceWrapper>
        <ActionsWrapper>
          <CounterWrapper>
            <MinusIcon size={16} weight="bold" onClick={handleDecreaseAmount} />
            <p>{amountItem}</p>
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