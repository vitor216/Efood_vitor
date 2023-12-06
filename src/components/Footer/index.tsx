import { Container, Imglogo, Imgicone, Titulo, Campo2 } from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'

const Footer = () => (
  <Container>
    <Imglogo src={logo} />
    <Campo2>
      <Imgicone src={facebook} />
      <Imgicone src={twitter} />
      <Imgicone src={instagram} />
    </Campo2>
    <Titulo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Titulo>
  </Container>
)

export default Footer
