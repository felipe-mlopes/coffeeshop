import { MapPinLine } from 'phosphor-react'
import styled from 'styled-components'

export const AddressContainer = styled.div`
  background: var(--base-card);
  padding: 2.5rem;
  border-radius: 6px;
`

export const AddressHeader = styled.header`
  display: flex;
  gap: .5rem;

    > div p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }

    > div p + p {
      font-size: .875rem;
      color: var(--base-text);
    }
`

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50% 10%;
  grid-template-areas: 
  "zipcode . ."
  "address address address"
  "number complement complement"
  "district city uf"
  ;
  gap: 1rem;
  padding-top: 2rem;

  input {
    padding: .75rem;
    width: 100%;
    background: var(--base-input);
    border: 1px solid var(--base-button);
    border-radius: 4px;

    ::placeholder {
      font-size: .875rem;
      font-weight: 400;
      color: var(--base-label);
    }

    :focus {
      outline: 0;
      font-size: .875rem;
      font-weight: 400;
      color: var(--base-text);
    }
  }

  label {
    display: flex;
    flex-direction: column;

    > p {
      position: relative;
      top: -29px;
      left: 320px;

      font-style: italic;
      font-weight: 400;
      font-size: .75rem;
      color: var(--base-label);
    }

    > span {
      margin-top: 5px;
      font-size: .85rem;
      color: red;
    }
  }

  .zipcode {
    grid-area: zipcode;
  }

  .address {
    grid-area: address;
  }

  .number {
    grid-area: number;
  }

  .complement {
    grid-area: complement;

  }

  .district {
    grid-area: district;
  }

  .city {
    grid-area: city;
  }

  .uf {
    grid-area: uf;
  }
`

export const MapPinLineIcon = styled(MapPinLine)`
  color: var(--yellow-dark);
`