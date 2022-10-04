import styled from 'styled-components'

export type TagVariant = 'tagCard' | 'tagFilter'

interface TagVariantProps {
  variant: TagVariant
}

export const TagContainer = styled.li<TagVariantProps>`
  padding: .25rem .5rem;
  border-radius: 100px;
  list-style: none;
  
  font-size: .625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--yellow-dark);

  border: 1px solid ${props => props.variant === 'tagFilter' ? 'var(--yellow)' : 'var(--yellow-light)' };
  background: ${props => props.variant === 'tagFilter' ? 'var(--background)' : 'var(--yellow-light)' };
  cursor: ${props => props.variant === 'tagFilter' ? 'pointer' : 'grab' };
  
  &:hover {
      border: 1px solid ${props => props.variant === 'tagFilter' 
      ? 'var(--background)' : 'var(--yellow-light)' };
      background: var(--yellow-light);
    }
`