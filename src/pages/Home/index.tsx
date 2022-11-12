import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import { data } from '../../data/data'
import { Card } from "./components/Card";
import { Tag, tagsName } from "./components/Tag";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Imagem from '../../assets/Imagem.svg'
import { CoffeeWrapper, ContentWrapper, Intro, Item, Items, Menu, PackageWrapper, ShoppingCartWrapper, TimerWrapper, Title } from "./styles";

export function Home() {
  const { tagSelected } = useContext(CartContext)

  const cards = data.map(item => {
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
  })

  const cardsFiltered = data
    .filter(item => item.tags
      .some(tag => tagSelected.includes(tag)))
        .map(item => {
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
    })

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
            {tagsName.map(item => {
              return (
                <Tag
                  key={item}
                  type={item} 
                  variant='tagFilter'
                />
              )
            })}
          </ul>
        </header>
        <main>
          { tagSelected.length > 1 ? cardsFiltered : cards }
        </main>
      </Menu>
    </>
  )
}