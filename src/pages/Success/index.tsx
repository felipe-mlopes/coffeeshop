import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { InfoDetails, InfoWrapper, MapPinIcon, OrderInfo, PaymentIcon, SuccessContainer, SuccessHeader, TimerIcon } from "./styles";
import Illustration from '../../assets/Illustration.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { paymentMethods } from "../Checkout/components/PaymentsTypes";


export function Success() {
  const { addressData } = useContext(CartContext)

  const payment = paymentMethods[addressData.paymentMethod].label

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
                <p>Entrega em <strong>{addressData.address}, {addressData.number} {addressData.complement}</strong></p>
                <p>{addressData.district} - {addressData.city}, {addressData.uf}</p>
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
                <strong>{payment[0].toUpperCase() + payment.substring(1)}</strong>
              </InfoDetails>
            </InfoWrapper>
          </OrderInfo>
          <img src={Illustration}/>
        </main>
      </SuccessContainer>
    </>
  )
}