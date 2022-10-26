import errors from '../../utils/errors.json'
import { ErrorWrapper } from './styles'

interface InputErrorType {
  type: string,
  field: string
}

export function InputError({ type, field }: InputErrorType) {
  // @ts-expect-error
  return <ErrorWrapper>{errors[field][type]}</ErrorWrapper>

  
}