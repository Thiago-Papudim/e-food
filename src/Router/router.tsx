import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import RestaurantPage from '../Pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
