import styled from "styled-components";
import { IconWrapper } from "../Home/styles";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;

  main {
    display: flex;
    gap: 6.375rem;
  }
`

export const SuccessHeader = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--yellow-dark);
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    font-stretch: 100;
    color: var(--base-subtitle);
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  gap: 2rem;

  padding: 2.5rem;
  margin-top: 2.5rem;
  min-width: 32.875rem;

  border: 1px solid;
  border-radius: 6px 36px;
  border: double 1px transparent;
  background-image: linear-gradient(var(--background), var(--background)), linear-gradient(to left, #8047F8, #DBAC2C);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;

  p, strong {
    font-size: 1rem;
    color: var(--base-text);
  }

  p {
    font-weight: 400;
  }
`

export const MapPinIcon = styled(IconWrapper)`
  background: var(--purple);
`

export const TimerIcon = styled(IconWrapper)`
  background: var(--yellow);
`

export const PaymentIcon = styled(IconWrapper)`
  background: var(--yellow-dark);
`