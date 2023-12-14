import * as S from './styles'
import bannerImg from '../../../assets/images/restaurante6-holanda.jpg'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Container>
      <S.Titulo1>Holandesa</S.Titulo1>
      <S.Titulo2>Arca Amsterdam</S.Titulo2>
    </S.Container>
  </S.Imagem>
)

export default Banner
