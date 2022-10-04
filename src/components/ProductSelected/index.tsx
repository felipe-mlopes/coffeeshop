// import { useContext } from "react";
// import { CartContext } from "../../contexts/CartContext";
import { CartProps } from "../../types/data";
import { MinusIcon, PlusIcon } from "../Card/styles";
import { ActionsCartWrapper, Counter, DeleteIcon, DetailsWrapper, ProductContainer } from "./styles";

export function ProductSelected({ name, image, price, amount }: CartProps) {
  // const { amountItens } = useContext(CartContext)

  return (
    <ProductContainer>
      <img src={image}/>
      <DetailsWrapper>
        <p>{name}</p>
        <ActionsCartWrapper>
          <Counter>
            <MinusIcon size={16} weight="bold" />
            <p>{amount}</p>
            <PlusIcon size={16} weight="bold" />
          </Counter>
          <button className="delete-button">
            <DeleteIcon size={16} />
            Remover
          </button>
        </ActionsCartWrapper>
      </DetailsWrapper>
      <strong>R$ 
        <span>{price}</span>
      </strong>
    </ProductContainer>
  )
}