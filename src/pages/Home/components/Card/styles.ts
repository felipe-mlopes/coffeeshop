import styled from "styled-components";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 20rem;
  padding: 0 1.25rem;
  background: var(--base-card);
  border-radius: 6px 36px;
`

export const CoffeeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
  height: 6.25rem;
  position: relative;
  top: -20px;
`

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1.25rem;

  h4 {
    margin-bottom: .5rem;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    color: var(--base-subtitle);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: var(--base-label);
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;
  padding: .8125rem 0 1.25rem;
`

export const PriceWrapper = styled.div`
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: .875rem;
    color: var(--base-text);
  }

  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--base-text);
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const ShopCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: var(--purple-dark);

  cursor: pointer;

  :hover {
    background: var(--purple);
  }
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: var(--base-card);
`

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem;
  border-radius: 6px;
  background: var(--base-button);
`

export const MinusIcon = styled(Minus)`
  color: var(--purple);
  cursor: pointer;

  :hover {
    color: var(--purple-dark);
  }
`

export const PlusIcon = styled(Plus)`
  color: var(--purple);
  cursor: pointer;

  :hover {
    color: var(--purple-dark);
  }
`

