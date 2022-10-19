import { useContext } from "react";
import { CartContext, CartTypes } from "../../contexts/CartContext";
import { MinusIcon, PlusIcon } from "../Card/styles";
import { ActionsCartWrapper, Counter, DeleteIcon, DetailsWrapper, ProductContainer } from "./styles";

export function ProductSelected({ id, name, image, amount, itemTotalPrice }: CartTypes) {
  const { deleteItemToCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  const handleDelete = () => {
    deleteItemToCart(id)
  }

  const handleIncreaseAmount = () => {
    increaseAmount(id)
  }

  const handleDecreaseAmount = () => {
    decreaseAmount(id)
  }

  return (
    <ProductContainer>
      <img src={image}/>
      <DetailsWrapper>
        <p>{name}</p>
        <ActionsCartWrapper>
          <Counter>
            <MinusIcon size={16} weight="bold" onClick={handleIncreaseAmount} />
            <p>{amount}</p>
            <PlusIcon size={16} weight="bold" onClick={handleDecreaseAmount} />
          </Counter>
          <button className="delete-button" onClick={handleDelete} >
            <DeleteIcon size={16} />
            Remover
          </button>
        </ActionsCartWrapper>
      </DetailsWrapper>
      <strong>R$ 
        <span>{itemTotalPrice.toFixed(2)}</span>
      </strong>
    </ProductContainer>
  )
}