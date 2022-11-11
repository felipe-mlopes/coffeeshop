import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { CartContext } from "../../contexts/CartContext";
import { ProductSelected } from "./components/ProductSelected";
import { AddressForm } from "./components/AddressForm";
import { PaymentsTypes } from "./components/PaymentsTypes";

import { CartShop, CartShopWrapper, CheckoutWrapper, CheckoutContainer, ProductWrapper, Total } from "./styles";
import { formatMoney } from "../../utils/formatMoney";

export type FormTypes = z.infer<typeof AddressSchema>

enum paymentMethods {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash'
}

const zipcodeFormat = /[0-9]{5}[0-9]{3}/
const textFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
const ufFormat = /[A-Za-z]{2}/

const AddressSchema = z.object({
  zipcode: z
    .string()
    .regex(zipcodeFormat, { message: 'O CEP informado é inválido' })
    .min(1)
    .max(8, { message: 'O CEP possui o limite de 8 números' }),
  address: z
    .string()
    .min(1, { message: 'O endereço é um campo obrigatório' })
    .regex(textFormat, { message: 'O endereço informado é inválido. Não pode conter números e/ou caracteres especiais' }),
  number: z
    .string()
    .min(1, { message: 'O número é um campo obrigatório' }),
  complement: z
    .string(),
  district: z
    .string()
    .min(1, { message: 'O bairro é um campo obrigatório' })
    .regex(textFormat, { message: 'O bairro informado é inválido. Não pode conter números e/ou caracteres especiais' }),
  city: z
    .string()
    .min(1, { message: 'A cidade é um campo obrigatório' })
    .regex(textFormat, { message: 'A cidade informado é inválido. Não pode conter números e/ou caracteres especiais' }),
  uf: z
    .string()
    .min(1, { message: 'O UF é um campo obrigatório' })
    .max(2, { message: 'Informar a sigla com 2 letras' })
    .regex(ufFormat, { message: 'Informar a sigla com 2 letras' }),
  paymentMethod: z
    .nativeEnum(paymentMethods, {
      errorMap: () => {
        return { message: 'Informe o método de pagamento' }
      }
    })
})

export function Checkout() {
  const { cart, setAddressData, setCart } = useContext(CartContext)
  const navigate = useNavigate()

  const methods = useForm<FormTypes>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      paymentMethod: undefined
    }
  })

  const handleDeliveryAddress: SubmitHandler<FormTypes> = deliveryAddress => {
    setAddressData(deliveryAddress)
    setCart([])
    navigate('/success')
  }

  const totalPriceItensToCart: number = cart.reduce((acc: any, item: any)=> {
    return acc += item.price * item.amount
  }, 0)

  const shippingValue = 10

  const totalCart = totalPriceItensToCart + shippingValue

  return (
    <>
      <FormProvider {...methods}>
        <CheckoutContainer>
          <CheckoutWrapper id="address-form" onSubmit={methods.handleSubmit(handleDeliveryAddress)}>
            <h4>Complete seu pedido</h4>
            <AddressForm />   
            <PaymentsTypes />
          </CheckoutWrapper>
          <CartShopWrapper>
            <h4>Cafés selecionados</h4>
            <CartShop>
              <ProductWrapper>
                {cart.length > 0 ? 
                  cart.map(item => {
                    return (
                      <ProductSelected 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        tags={item.tags}
                        amount={item.amount}
                        itemTotalPrice={item.itemTotalPrice}
                      />
                    )
                  })
                : <span>Carrinho Vazio</span>}
              </ProductWrapper>
              <Total>
                <div>
                  <span>Total de itens</span>
                  <span>R$ 
                    {formatMoney(totalPriceItensToCart)}
                  </span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 
                    {formatMoney(shippingValue)}  
                  </span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>R$ 
                    {formatMoney(totalCart)}
                  </strong>
                </div>
              </Total>
              <button disabled={cart.length === 0} type="submit" form="address-form" >
                Confirmar pedido
              </button>
            </CartShop>
          </CartShopWrapper>
        </CheckoutContainer>
      </FormProvider>
    </>
  )
}