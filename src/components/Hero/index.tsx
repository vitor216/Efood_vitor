import { Imagem, Titulo, Campo } from './styles'
import * as S from './styles'
import imagemdeFundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${imagemdeFundo})` }}>
    <div className="container">
      <S.img src={logo} />
      <Campo>
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </Campo>
      <Tag size="big">Destaque do dia</Tag>
      <Button type="link" to="/produto" title="clique aqui para saber mais">
        Saiba Mais
      </Button>
    </div>
  </Imagem>
)

export default Hero
