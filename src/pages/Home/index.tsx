import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Imagem from '../../assets/Imagem.svg'
import { CoffeeWrapper, ContentWrapper, Intro, Item, Items, Menu, PackageWrapper, ShoppingCartWrapper, TimerWrapper, Title } from "./styles";
import { data } from '../../data/data'
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";

export function Home() {

  return (
    <>
      <Intro>
        <ContentWrapper>
          <Title>
            <h3>Encontre o café perfeito para qualquer hora do dia</h3>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </Title>
          <Items>
            <div>
              <Item>
                <ShoppingCartWrapper >
                  <ShoppingCart size={16} color="#FFFF" weight="fill" />
                </ShoppingCartWrapper >
                <p>Compra simples e segura</p>
              </Item>
              <Item>
                <TimerWrapper>
                  <Timer size={16} color="#FFFF" weight="fill" />
                </TimerWrapper>
                <p>Entrega rápida e rastreada</p>
              </Item>
            </div>
            <div>
              <Item>
                <PackageWrapper>
                  <Package size={16} color="#FFFF" weight="fill" />
                </PackageWrapper>
                <p>Embalagem mantém o café intacto</p>
              </Item>
              <Item>
                <CoffeeWrapper>
                  <Coffee size={16} color="#FFFF" weight="fill" />
                </CoffeeWrapper>
                <p>O café chega fresquinho até você</p>
              </Item>
            </div>

          </Items>
        </ContentWrapper>
        <img src={Imagem} />
      </Intro>
      <Menu>
        <header>
          <h3>Nossos cafés</h3>
          <ul>
            <Tag type={"tradicional"} variant="tagFilter"/>
            <Tag type={"especial"} variant="tagFilter" />
            <Tag type={"com leite"} variant="tagFilter" />
            <Tag type={"alcoólico"} variant="tagFilter" />
            <Tag type={"gelado"} variant="tagFilter" />
          </ul>
        </header>
        <main>
          {data.map(item => {
            return (
              <Card 
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                tags={item.tags}
                price={item.price}
              />
            )
          })}
        </main>
      </Menu>
    </>
  )
}