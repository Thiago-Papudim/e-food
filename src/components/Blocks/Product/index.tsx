import * as S from './styles'
import Button from '../../Button'
import { useState } from 'react'
import close from '../../../assets/images/close.svg'
import { useDispatch } from 'react-redux'
import { open, add } from '../../../store/reducers/cart'
import { Cardapio } from '../../../types'

type Props = {
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  rest: Cardapio
}

const Product = ({ foto, nome, descricao, porcao, preco, rest }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(rest))
  }

  const openCart = () => {
    dispatch(open())
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 113) {
      return descricao.slice(0, 120) + '...'
    }

    return descricao
  }

  return (
    <>
      <S.PratoStyle>
        <S.ImageStyle src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{getDescription(descricao)}</p>
        <Button
          onClick={() => {
            setModalOpen(true)
          }}
        >
          Adicionar ao carrinho
        </Button>
      </S.PratoStyle>

      <S.Modal className={modalOpen ? 'visivel' : ''}>
        <div className="overlay" onClick={() => setModalOpen(false)} />
        <S.ModalContent className="container">
          <S.ModalImage src={foto} alt={nome} />
          <S.ModalSobre>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>Serve: de {porcao}</p>
            <Button
              onClick={() => {
                setModalOpen(false)
                openCart()
                addToCart()
              }}
            >
              Adicionar ao carrinho - {formataPreco(preco)}
            </Button>
          </S.ModalSobre>
          <S.Close
            src={close}
            alt="Fechar"
            onClick={() => setModalOpen(false)}
          />
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default Product
