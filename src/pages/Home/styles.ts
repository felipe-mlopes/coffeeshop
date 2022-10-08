import styled from "styled-components";
import BackgroundIntro from '../../assets/Background.svg'

export const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 5.75rem 10rem;
  background: url(${BackgroundIntro}) no-repeat;
  background-size: cover;
  backdrop-filter: blur(10rem);
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Title = styled.div`
  h3 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--base-title);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--base-subtitle);
  }
`

export const Items = styled.div`
  display: flex;
  gap: 2.5rem;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-bottom: 1.25rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--base-text);
  }
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
`

export const ShoppingCartWrapper = styled(IconWrapper)`
  background: var(--yellow-dark);
` 

export const TimerWrapper = styled(IconWrapper)`
  background: var(--yellow);
`

export const PackageWrapper = styled(IconWrapper)`
  background: var(--base-text);
` 

export const CoffeeWrapper = styled(IconWrapper)`
  background: var(--purple);
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.375rem;

    h3 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--base-title);
    }

    ul {
      display: flex;
      align-items: center;
      gap: .5rem;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, 16rem);
    gap: 2rem;
    position: relative;
  }
`