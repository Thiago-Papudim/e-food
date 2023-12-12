import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../../store'
import logo from '../../../assets/images/logo.svg'
import { HeaderStyle, Header } from './styles'
import { open } from '../../../store/reducers/cart'

const HeaderPage = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header>
      <div className="container">
        <HeaderStyle>
          <h2>Restaurantes</h2>
          <Link to={'/'}>
            <img src={logo} alt="Logo do site" />
          </Link>
          <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
        </HeaderStyle>
      </div>
    </Header>
  )
}

export default HeaderPage
