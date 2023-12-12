import logo from '../../assets/images/logo.svg'
import redes from '../../assets/images/redes_sociais.svg'
import { FooterStyle, Images } from './styles'

const Footer = () => (
  <FooterStyle>
    <div className="container">
      <Images>
        <img src={logo} alt="Logo do Site" />
        <img src={redes} alt="Redes sociais" />
      </Images>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterStyle>
)

export default Footer
