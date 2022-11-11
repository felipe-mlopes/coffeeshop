import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 10rem;

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--base-subtitle);
    margin-bottom: .9375rem;
  }
`
export const CheckoutWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`

const CheckoutHeader = styled.div`
  background: var(--base-card);
  padding: 2.5rem;
  border-radius: 6px;

  > header {
   display: flex;
   gap: .5rem;

    > div p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }

    > div p + p {
      font-size: .875rem;
      color: var(--base-text);
    }
  }
`

export const CartShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`

export const CartShop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background: var(--base-card);
  border-radius: 6px 44px;

  button {
    padding: .75rem 7.35rem;
    background: var(--yellow);
    border-radius: 6px;
    border: 0;

    font-size: .875rem;
    font-weight: 700;
    font-stretch: 100;
    line-height: 1.6;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--white);

    :hover {
      background: var(--yellow-dark);
      cursor: pointer;
    }

    :disabled {
      opacity: .4;
      cursor: not-allowed;
    }
  }
`

export const ProductWrapper = styled.div`
  border-bottom: 1px solid var(--base-button);
  max-width: 23rem;
  padding-bottom: 1rem;
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  }

  span {
    font-size: .875rem;
    font-weight: 400;
    color: var(--base-text);
  }

  span + span {
    font-size: 1rem;
  }

  strong {
    font-size: 1.25rem;
    color: var(--base-subtitle);
  }

`