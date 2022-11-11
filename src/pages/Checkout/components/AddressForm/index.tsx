import { useFormContext } from 'react-hook-form'
import { AddressContainer, AddressFormContainer, AddressHeader, MapPinLineIcon } from './styles'

export interface ErrosType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrosType

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLineIcon size={22} />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressHeader>
      <AddressFormContainer >
        <label htmlFor="Zipcode" className="zipcode" >
          <input 
            type="text" 
            id="Zipcode" 
            placeholder="CEP" 
            {...register('zipcode')} 
          />
            {errors.zipcode?.message && <span>{errors.zipcode?.message}</span> }
        </label>
        <label htmlFor="Address" className="address" >
          <input 
            type="text"
            id="Address" 
            placeholder="Rua" 
            {...register('address')} 
          />
            {errors.address?.message && <span>{errors.address?.message}</span> }
        </label>
        <label htmlFor="Number" className="number" >
          <input 
            type="text" 
            id="Number" 
            placeholder="Número" 
            {...register('number')} 
          />
            {errors.number?.message && <span>{errors.number?.message}</span> }
        </label>
        <label htmlFor="Complement" className="complement" >
          <input 
            type="text" 
            id="Complement" 
            placeholder="Complemento" 
            {...register('complement')} 
          />
          <p>Opcional</p>
        </label>
        <label htmlFor="District" className="district" >
          <input 
            type="text" 
            id="District" 
            placeholder="Bairro" 
            {...register('district')} 
          />
            {errors.district?.message && <span>{errors.district?.message}</span> }
        </label>
        <label htmlFor="City" className="city" >
          <input 
            type="text" 
            id="City" 
            placeholder="Cidade" 
            {...register('city')} 
          />
            {errors.city?.message && <span>{errors.city?.message}</span> }
        </label>
        <label htmlFor="UF" className="uf" >
          <input 
            type="text" 
            id="UF" 
            placeholder="UF" 
            {...register('uf', { maxLength: 2 })} 
          />
            {errors.uf?.message && <span>{errors.uf?.message}</span> }
        </label>
      </AddressFormContainer>
    </AddressContainer>
  )
}