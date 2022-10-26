import styled from "styled-components";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

export const ChecoutContainer = styled.main`
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
export const CheckoutWrapper = styled.div`
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

export const AddressForm = styled(CheckoutHeader)`
  form {
      display: grid;
      grid-template-columns: 35% 50% 10%;
      grid-template-areas: 
      "zipcode . ."
      "address address address"
      "number complement complement"
      "district city uf"
      ;
      gap: 1rem;
      padding-top: 2rem;

      input {
        padding: .75rem;
        width: 100%;
        background: var(--base-input);
        border: 1px solid var(--base-button);
        border-radius: 4px;

        ::placeholder {
          font-size: .875rem;
          font-weight: 400;
          color: var(--base-label);
        }

        :focus {
          outline: 0;
          font-size: .875rem;
          font-weight: 400;
          color: var(--base-text);
        }
      }

      label {
        display: flex;
        flex-direction: column;

        span {
          position: relative;
          top: -29px;
          left: 320px;

          font-style: italic;
          font-weight: 400;
          font-size: .75rem;
          color: var(--base-label);
        }
      }

      .zipcode {
        grid-area: zipcode;
      }

      .address {
        grid-area: address;
      }

      .number {
        grid-area: number;
      }

      .complement {
        grid-area: complement;

      }

      .district {
        grid-area: district;
      }

      .city {
        grid-area: city;
      }

      .uf {
        grid-area: uf;
      }
  }
`

export const MapPinLineIcon = styled(MapPinLine)`
  color: var(--yellow-dark);
`

export const Billing = styled(CheckoutHeader)`
  main {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding-top: 2rem;
  }
  
  button {
    display: flex;
    align-items: center;
    padding: 1rem 1.23rem 1rem 1rem;
    gap: .75rem;

    background: ${props => props.className === 'actived' ? 'var(--purple-light)' : 'var(--base-button)'};
    border: 1px solid ${props => props.className === 'actived' ? 'var(--purple)' : 'transparent'};
    border-radius: 6px;

    font-size: .75rem;
    font-weight: 400;
    white-space: nowrap;
    text-transform: uppercase;
    color: var(--base-text);
    
    cursor: pointer;

    :hover {
      background: var(--base-hover);
      color: var(--base-subtitle);
    }

    :active {
      background: var(--purple-light);
      border: 1px solid var(--purple);
    }

    :last-child {
      padding-right: calc(1rem + 3.98rem);
    }
  }
`

export const DollarIcon = styled(CurrencyDollar)`
  color: var(--purple);
`

export const CreditCardIcon = styled(CreditCard)`
  color: var(--purple);
`

export const BankIcon = styled(Bank)`
  color: var(--purple);
`

export const MoneyIcon = styled(Money)`
  color: var(--purple);
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