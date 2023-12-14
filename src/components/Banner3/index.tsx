import * as S from './styles'
import bannerImg from '../../assets/images/restaurante3-espanha.png'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Container>
      <S.Titulo1>Espanhola</S.Titulo1>
      <S.Titulo2>Oro Bianco</S.Titulo2>
    </S.Container>
  </S.Imagem>
)

export default Banner
