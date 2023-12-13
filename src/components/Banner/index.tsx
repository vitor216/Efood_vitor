import * as S from './styles'

import bannerImg from '../../assets/images/Banner.svg'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <S.Titulo1>Italiana</S.Titulo1>
        <S.Titulo2>La Dolce Vita Trattoria</S.Titulo2>
      </div>
    </div>
  </S.Imagem>
)

export default Banner
