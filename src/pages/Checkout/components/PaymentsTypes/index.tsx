import { useFormContext } from "react-hook-form";
import { ErrosType } from "../AddressForm";
import { PaymentInput } from "../PaymentInput";
import { BankIcon, ButtonWrapper, CreditCardIcon, DollarIcon, ErrorWrapper, MoneyIcon, PaymentsTypesContainer } from "./sytles";

export const paymentMethods = {
  credit: {
    label: 'cartão de crédito',
    icon: <CreditCardIcon size={16} />
  },
  debit: {
    label: 'cartão de débito',
    icon: <BankIcon size={16} />
  },
  cash: {
    label: 'dinheiro',
    icon: <MoneyIcon size={16} />
  }
}

export function PaymentsTypes() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrosType

  return (
    <PaymentsTypesContainer>
      <header>
        <DollarIcon size={22} />
        <div>
          <p>Pagamento</p>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </header>
      <ButtonWrapper>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentInput 
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register("paymentMethod")}
          />
        ))}
      </ButtonWrapper>
      <ErrorWrapper>
        {errors.paymentMethod?.message && <span>{errors.paymentMethod?.message}</span>}
      </ErrorWrapper>      
    </PaymentsTypesContainer>
  )
}