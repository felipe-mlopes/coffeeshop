import { useContext } from "react";
import { ProductSelected } from "../../components/ProductSelected";
import { CartContext } from "../../contexts/CartContext";
import { AddressForm, BankIcon, Billing, CartShop, CartShopWrapper, CheckoutWrapper, ChecoutContainer, CreditCardIcon, DollarIcon, MapPinLineIcon, MoneyIcon, ProductWrapper, Total } from "./styles";

export function Checkout() {
  const { cart } = useContext(CartContext)

  const totalPriceItensToCart = cart.reduce((acc: any, item: any)=> {
    return acc += item.price * item.amount
  }, 0)

  const shippingValue = 10

  const totalCart = totalPriceItensToCart + shippingValue

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
            <form>
              <label htmlFor="Zipcode" className="zipcode" >
                <input type="text" id="Zipcode" placeholder="CEP" />
              </label>
              <label htmlFor="Address" className="address" >
                <input type="text" id="Address" placeholder="Rua" />
              </label>
              <label htmlFor="Number" className="number" >
                <input type="text" id="Number" placeholder="Número" />
              </label>
              <label htmlFor="Complement" className="complement" >
                <input type="text" id="Complement" placeholder="Complemento" />
                <span>Opcional</span>
              </label>
              <label htmlFor="District" className="district" >
                <input type="text" id="District" placeholder="Bairro" />
              </label>
              <label htmlFor="City" className="city" >
                <input type="text" id="City" placeholder="Cidade" />
              </label>
              <label htmlFor="UF" className="uf" >
                <input type="text" id="UF" placeholder="UF" />
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
              <button>
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
            <button disabled={cart.length === 0}>
              Confirmar pedido
            </button>
          </CartShop>
        </CartShopWrapper>
      </ChecoutContainer>
    </>
  )
}