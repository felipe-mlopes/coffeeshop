export interface DataProps {
  id: number,
  name: string,
  image: string,
  tags?: string[],
  description?: string,
  price: number
}

export interface CartProps extends DataProps {
  amount: number
}