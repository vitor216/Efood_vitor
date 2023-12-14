import * as S from './styles'
import bannerImg from '../../assets/images/restaurante4-inglaterra.jpg'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Container>
      <S.Titulo1>Inglesa</S.Titulo1>
      <S.Titulo2>Silversmiths Restaurant</S.Titulo2>
    </S.Container>
  </S.Imagem>
)

export default Banner
