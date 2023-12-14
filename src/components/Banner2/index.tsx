import * as S from './styles'
import bannerImg from '../../assets/images/restaurante1-japão.svg'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Container>
      <S.Titulo1>Japonesa</S.Titulo1>
      <S.Titulo2>Hioki Sushi</S.Titulo2>
    </S.Container>
  </S.Imagem>
)

export default Banner
