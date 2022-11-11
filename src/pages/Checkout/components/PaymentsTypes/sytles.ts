import styled from "styled-components";
import { CreditCard, Bank, Money, CurrencyDollar } from "phosphor-react";

export const PaymentsTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--base-card);
  padding: 2.5rem;
  border-radius: 6px;

  header {
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

export const ErrorWrapper = styled.div`
  margin-top: .25rem;

  span {
    font-size: .85rem;
    color: red;
  }
`

export const DollarIcon = styled(CurrencyDollar)`
  color: var(--purple);
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    padding-top: 1rem;
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