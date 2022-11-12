import { useContext } from "react";

import { CartContext } from "../../../../contexts/CartContext";
import { TagContainer } from "./styles";

export const tagsName = ['tradicional', 'especial', 'com leite', 'alcoólico', 'gelado']

export interface TagProps {
  type: string,
  variant: 'tagCard' | 'tagFilter'
}

export function Tag({ type, variant }: TagProps) {
  const { tagSelected, setTagSelected, filterTagSelected } = useContext(CartContext)

  const handleFilterTagSelected = () => {
    const tagAlreadySelected = tagSelected.find(item => item === type)

    if(!tagAlreadySelected && variant === 'tagFilter') {
      filterTagSelected(type)
    } 
    
    const newTagsSelected = tagSelected.filter(item => item !== type)

    if(tagAlreadySelected) {
      setTagSelected(newTagsSelected)
    }
  }

  return (
    <TagContainer 
      variant={variant} 
      className={ tagSelected.includes(type) 
      ? 'checked' 
      : '' } 
      onClick={handleFilterTagSelected} 
    >
      {type}
    </TagContainer>
  )
}