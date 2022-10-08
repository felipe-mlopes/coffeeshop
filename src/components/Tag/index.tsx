import { TagContainer, TagVariant } from "./styles";

export interface TagProps {
  type: 'tradicional' | 'especial' | 'com leite' | 'alcoólico' | 'gelado',
  variant: TagVariant
}

export function Tag({ type, variant }: TagProps) {
  return (
    <TagContainer variant={variant}>
      {type}
    </TagContainer>
  )
}