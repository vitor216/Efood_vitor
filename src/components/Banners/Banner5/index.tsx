import * as S from './styles'
import bannerImg from '../../../assets/images/restaurante5-frança.jpg'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Container>
      <S.Titulo1>Francesa</S.Titulo1>
      <S.Titulo2>Le Gabriel</S.Titulo2>
    </S.Container>
  </S.Imagem>
)

export default Banner
