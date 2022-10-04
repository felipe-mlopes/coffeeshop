import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { InfoDetails, InfoWrapper, MapPinIcon, OrderInfo, PaymentIcon, SuccessContainer, SuccessHeader, TimerIcon } from "./styles";
import Illustration from '../../assets/Illustration.svg'

export function Success() {
  return (
    <>
      <SuccessContainer>
        <SuccessHeader>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SuccessHeader>
        <main>
          <OrderInfo>
            <InfoWrapper>
              <MapPinIcon >
                <MapPin size={16} color="#FFFF" weight="fill"/>
              </MapPinIcon>
              <InfoDetails>
                <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                <p>Farrapos - Porto Alegre, RS</p>
              </InfoDetails>
            </InfoWrapper>
            <InfoWrapper>
              <TimerIcon>
                <Timer size={16} color="#FFFF" weight="fill" />
              </TimerIcon>
              <InfoDetails>
                <p>Previsão de entrega</p>
                <strong>20min - 30min</strong>
              </InfoDetails>
            </InfoWrapper>
            <InfoWrapper>
              <PaymentIcon>
                <CurrencyDollar size={16} color="#FFFF" weight="fill" />
              </PaymentIcon>
              <InfoDetails>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </InfoDetails>
            </InfoWrapper>
          </OrderInfo>
          <img src={Illustration}/>
        </main>
      </SuccessContainer>
    </>
  )
}