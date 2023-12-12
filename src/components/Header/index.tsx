import logo from '../../assets/images/logo.svg'
import { HeaderStyle } from './styles'

const Header = () => (
  <>
    <HeaderStyle>
      <img src={logo} alt="Logo do site" />
      <p>
        Viva experiências gastronômicasno
        <br />
        conforto da sua casa
      </p>
    </HeaderStyle>
  </>
)

export default Header
