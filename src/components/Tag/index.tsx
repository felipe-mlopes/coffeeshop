import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { TagContainer } from "./styles";

export type TagsNameType = string[]

export const tagsName = ['tradicional', 'especial', 'com leite', 'alcoólico', 'gelado'] as TagsNameType

export interface TagProps {
  type: TagsNameType,
  variant: 'tagCard' | 'tagFilter',
  isChecked: boolean
}

export function Tag({ type, variant }: TagProps) {
  const { tagSelected, setTagSelected, filterTagSelected } = useContext(CartContext)
  const [isChecked, setIsChecked] = useState(false) 

  const handleFilterTagSelected = () => {
    const tagAlreadySelected = tagSelected.find(item => item === type)

    if(!tagAlreadySelected && variant === 'tagFilter') {
      filterTagSelected(type)
      setIsChecked(!isChecked)
    } 
    
    const newTagsSelected = tagSelected.filter(item => item !== type)

    if(tagAlreadySelected && isChecked === true) {
      setTagSelected(newTagsSelected)
      setIsChecked(!isChecked)
    }
  }

  return (
    <TagContainer variant={variant} className={ isChecked ? 'checked' : '' } onClick={handleFilterTagSelected} >
      {type}
    </TagContainer>
  )
}