import styled from "styled-components";

import { NavbarProps } from '.'

export const NavContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 2rem 10rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--background);
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background: var(--purple-light);

  p {
    color: var(--purple-dark);
    font-size: .875rem;
    line-height: 1.3;
  }
`

export const CartWrapper = styled.div.attrs((props: NavbarProps) => ({
  content: props.counter
}))<NavbarProps>`
  display: flex;
  align-items: center;
  
  position: relative;
  padding: 0.5rem;
  
  background: var(--yellow-light);
  border-radius: 6px;

  cursor: pointer;

  &::after {
    content: '${props => props.counter && props.counter}';
    display: ${props => props.counter && props.counter > 0 ? 'flex' : 'none' };
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    background: var(--yellow-dark);

    padding: 1px;

    position: absolute;
    right: -9px;
    top: -9px;
    
    border-radius: 50%;

    font-size: .75rem;
    font-weight: 700;
    text-align: center;
    color: var(--white);
  }
`