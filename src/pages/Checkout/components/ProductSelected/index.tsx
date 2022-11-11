import { useContext } from "react";

import { CartContext, CartTypes } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";

import { MinusIcon, PlusIcon } from "../../../Home/components/Card/styles";
import { ActionsCartWrapper, Counter, DeleteIcon, DetailsWrapper, ProductContainer } from "./styles";

export function ProductSelected({ id, name, image, amount, itemTotalPrice }: CartTypes) {
  const { deleteItemToCart, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext)

  const handleDelete = () => {
    deleteItemToCart(id)
  }

  const handleIncreaseQuantity = () => {
    increaseItemQuantity(id)
  }

  const handleDecreaseQuantity = () => {
    decreaseItemQuantity(id)
  }

  return (
    <ProductContainer>
      <img src={image}/>
      <DetailsWrapper>
        <p>{name}</p>
        <ActionsCartWrapper>
          <Counter>
            <MinusIcon size={16} weight="bold" onClick={handleDecreaseQuantity} />
            <p>{amount}</p>
            <PlusIcon size={16} weight="bold" onClick={handleIncreaseQuantity} />
          </Counter>
          <button className="delete-button" onClick={handleDelete} >
            <DeleteIcon size={16} />
            Remover
          </button>
        </ActionsCartWrapper>
      </DetailsWrapper>
      <strong>R$ 
        <span>{formatMoney(itemTotalPrice)}</span>
      </strong>
    </ProductContainer>
  )
}