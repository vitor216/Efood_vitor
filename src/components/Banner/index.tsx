import { Imagem, Titulo1, Titulo2 } from './styles'

import bannerImg from '../../assets/images/Banner.svg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo1>Italiana</Titulo1>
      <Titulo2>La Dolce Vita Trattoria</Titulo2>
    </div>
  </Imagem>
)

export default Banner
