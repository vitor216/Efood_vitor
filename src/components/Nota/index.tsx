import { Notas, ImgEstrela } from './styles'
import estrela from '../../assets/images/estrela.svg'

export type Props = {
  children: string
}

const Nota = ({ children }: Props) => (
  <>
    <Notas>{children}</Notas>
    <ImgEstrela>
      <img src={estrela} />
    </ImgEstrela>
  </>
)

export default Nota
