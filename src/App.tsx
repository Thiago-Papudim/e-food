import { Provider } from 'react-redux'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Blocks/Cart'
import Rotas from './Router/router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
