import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'

const Footer = () => (
  <S.Container>
    <S.Imglogo src={logo} />
    <S.Campo2>
      <S.Imgicone src={facebook} />
      <S.Imgicone src={twitter} />
      <S.Imgicone src={instagram} />
    </S.Campo2>
    <S.Titulo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Titulo>
  </S.Container>
)

export default Footer
