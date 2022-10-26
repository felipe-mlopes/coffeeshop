import { useContext, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ProductSelected } from "../../components/ProductSelected";
import { CartContext } from "../../contexts/CartContext";

import { AddressForm, BankIcon, Billing, CartShop, CartShopWrapper, CheckoutWrapper, ChecoutContainer, CreditCardIcon, DollarIcon, MapPinLineIcon, MoneyIcon, ProductWrapper, Total } from "./styles";
import { InputError } from "../../components/InputError";

interface FormTypes {
  zipcode: number,
  address: string,
  number: number,
  complement: string,
  district: string,
  city: string,
  uf: string
}

const zipcodeFormat = /[0-9]{5}[0-9]{3}/
const textFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
const ufFormat = /[A-Za-z]{2}/

const AddressSchema = yup.object({
  zipcode: yup.string().matches(zipcodeFormat).required(),
  address: yup.string().matches(textFormat).required(),
  number: yup.number().positive().integer().required(),
  complement: yup.string(),
  district: yup.string().matches(textFormat).required(),
  city: yup.string().matches(textFormat).required(),
  uf: yup.string().matches(ufFormat).max(2).required()
}).required()


export function Checkout() {
  const { cart } = useContext(CartContext)
  const [isActived, setIsActived] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormTypes>({
    resolver: yupResolver(AddressSchema)
  })

  const totalPriceItensToCart: number = cart.reduce((acc: any, item: any)=> {
    return acc += item.price * item.amount
  }, 0)

  const shippingValue = 10

  const totalCart = totalPriceItensToCart + shippingValue

  const handleDeliveryAddress: SubmitHandler<FormTypes> = deliveryAddress => console.log(deliveryAddress)

  return (
    <>
      <ChecoutContainer>
        <CheckoutWrapper>
          <h4>Complete seu pedido</h4>
          <AddressForm>
            <header>
              <MapPinLineIcon size={22} />
              <div>
                <p>Endereço de entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <form id="address-form" onSubmit={handleSubmit(handleDeliveryAddress)} >
              <label htmlFor="Zipcode" className="zipcode" >
                <input type="text" id="Zipcode" placeholder="CEP" {...register('zipcode')} />
                {errors?.zipcode?.type && <InputError type={errors.zipcode.type} field="zipcode" />}
              </label>
              <label htmlFor="Address" className="address" >
                <input type="text" id="Address" placeholder="Rua" {...register('address')} />
                {errors?.address?.type && <InputError type={errors.address.type} field="address" />}
              </label>
              <label htmlFor="Number" className="number" >
                <input type="text" id="Number" placeholder="Número" {...register('number')} />
                {errors?.number?.type && <InputError type={errors.number.type} field="number" />}
              </label>
              <label htmlFor="Complement" className="complement" >
                <input type="text" id="Complement" placeholder="Complemento" {...register('complement')} />
                <span>Opcional</span>
              </label>
              <label htmlFor="District" className="district" >
                <input type="text" id="District" placeholder="Bairro" {...register('district')} />
                {errors?.district?.type && <InputError type={errors.district.type} field="district" />}
              </label>
              <label htmlFor="City" className="city" >
                <input type="text" id="City" placeholder="Cidade" {...register('city')} />
                {errors?.city?.type && <InputError type={errors.city.type} field="city" />}
              </label>
              <label htmlFor="UF" className="uf" >
                <input type="text" id="UF" placeholder="UF" {...register('uf', { maxLength: 2 })} />
                {errors?.uf?.type && <InputError type={errors.uf.type} field="uf" />}
              </label>
            </form>
          </AddressForm>
          <Billing>
            <header>
              <DollarIcon size={22} />
              <div>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>
            <main>
              <button className={isActived ? 'actived' : ''} onClick={() => setIsActived(!isActived)} >
                  <CreditCardIcon size={16} />
                  <span>cartão de crédito</span>
                </button>
                <button>
                  <BankIcon size={16} />
                  <span>cartão de dédito</span>
                </button>
                <button>
                  <MoneyIcon size={16} />
                  <span>dinheiro</span>
                </button>
            </main>
          </Billing>
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
                  {totalPriceItensToCart.toFixed(2)}
                </span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 
                  {shippingValue.toFixed(2)}  
                </span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 
                  {totalCart.toFixed(2)}
                </strong>
              </div>
            </Total>
            <button disabled={cart.length === 0} type="submit" form="address-form" >
              Confirmar pedido
            </button>
          </CartShop>
        </CartShopWrapper>
      </ChecoutContainer>
    </>
  )
}