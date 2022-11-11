import styled from "styled-components";

export const PaymentInputContainer = styled.div`
    input {
      visibility: hidden;
      appearance: none;
    }

    input:checked + label div {
      background: var(--purple-light);
      border: 1px solid var(--purple);
    }
`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 1rem;

    background: ${props => props.className === 'active' ? 'var(--purple-light)' : 'var(--base-button)'};
    border: 1px solid ${props => props.className === 'active' ? 'var(--purple)' : 'transparent'};
    border-radius: 6px;

    font-size: .75rem;
    font-weight: 400;
    white-space: nowrap;
    text-transform: uppercase;
    color: var(--base-text);
    
    cursor: pointer;
    user-select: none;

    :hover {
      background: var(--base-hover);
      color: var(--base-subtitle);
    }
`