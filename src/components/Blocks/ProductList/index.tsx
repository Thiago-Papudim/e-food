import Product from '../Product'
import * as S from './styles'
import { useParams } from 'react-router-dom'
import { useAPI } from '../../../hooks/useAPI'
import { Restaurante } from '../../../types'
import Banner from '../Banner'

const ProductList = () => {
  const { id } = useParams()

  const { data: restaurant } = useAPI<Restaurante>(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  )

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner
        avaliacao={restaurant.avaliacao}
        titulo={restaurant.titulo}
        capa={restaurant.capa}
      />

      <S.List className="container">
        {restaurant.cardapio.map((item) => (
          <li key={item.id}>
            <Product
              rest={item}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
              porcao={item.porcao}
              preco={item.preco}
            />
          </li>
        ))}
      </S.List>
    </>
  )
}

export default ProductList
