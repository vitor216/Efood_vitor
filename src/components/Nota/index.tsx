import * as S from './styles'
import estrela from '../../assets/images/estrela.svg'

export type Props = {
  children: string
}

const Nota = ({ children }: Props) => (
  <>
    <S.Notas>{children}</S.Notas>
    <S.ImgEstrela>
      <img src={estrela} />
    </S.ImgEstrela>
  </>
)

export default Nota
