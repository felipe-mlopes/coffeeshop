import { Trash } from "phosphor-react";
import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: .5rem .25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    display: flex;
    text-align: right;
    font-size: 1rem;
    color: var(--base-text);
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const ActionsCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

 .delete-button {
    display: flex;
    align-items: center;
    gap: .25rem;
    padding: .40625rem .5rem;

    background: var(--base-button);
    border-radius: 6px;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.6;
    text-transform: uppercase;
    color: var(--base-text);
    cursor: pointer;

    :hover { 
      background: var(--base-hover);
      color: var(--base-subtitle);

      svg {
        color: var(--purple-dark);
      }
    }
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .3438rem .5rem;

  background: var(--base-button);
  border-radius: 6px;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--base-title);
  }
`

export const DeleteIcon = styled(Trash)`
  color: var(--purple);
`