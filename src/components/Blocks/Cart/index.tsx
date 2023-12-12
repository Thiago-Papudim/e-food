import * as S from './styles'

import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { close, remove, clear } from '../../../store/reducers/cart'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isLoading, isError, isSuccess }] =
    usePurchaseMutation()
  const [cart, setCart] = useState(true)
  const [purchaseData, setPurchaseData] = useState(false)
  const [paymentData, setPaymentData] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const [emptyCart, setEmptyCart] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      CEP: '',
      number: '',
      reference: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      address: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      city: Yup.string()
        .min(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatorio'),
      CEP: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      number: Yup.number()
        .min(2, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardName: Yup.string()
        .min(8, 'O campo precisa ter pelo menos 8 caracteres')
        .required('Campo obrigatorio'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter pelo menos 16 caracteres')
        .required('Campo obrigatorio'),
      cvv: Yup.number().min(3, 'CVV incorreto').required('Campo obrigatorio'),
      expiresMonth: Yup.string()
        .max(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatorio'),
      expiresYear: Yup.string()
        .max(4, 'O campo precisa ter pelo menos 4 caracteres')
        .required('Campo obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.address,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.number),
            complement: values.reference
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInput = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const goToPurchase = () => {
    setCart(false)
    setPurchaseData(true)
  }

  const backToCart = () => {
    setCart(true)
    setPurchaseData(false)
    setPaymentData(false)
    setCheckout(false)
  }

  const goToPayment = () => {
    if (
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.CEP &&
      !form.errors.number
    ) {
      setPurchaseData(false)
      setPaymentData(true)
    }
  }

  const backToPurchase = () => {
    setPaymentData(false)
    setPurchaseData(true)
  }

  const goToCheckout = () => {
    if (
      !form.errors.cardName &&
      !form.errors.cardNumber &&
      !form.errors.cvv &&
      !form.errors.expiresMonth &&
      !form.errors.expiresYear
    ) {
      setPaymentData(false)
      setCheckout(true)
      dispatch(clear())
    }
  }

  const finishPurchase = () => {
    setCart(true)
    setCheckout(false)
    closeCart()
    setEmptyCart(false)
    navigate('/')
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar className={cart ? '' : 'is-closed'}>
        {items.length < 1 ? (
          <div>
            <S.Title>Carrinho vazio</S.Title>
          </div>
        ) : (
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
          </ul>
        )}
        <S.Prices>
          Valor total <span>{formataPreco(getTotal())}</span>
        </S.Prices>
        <S.Button onClick={goToPurchase}>Continuar com a entrega</S.Button>
      </S.Sidebar>
      <S.Sidebar className={purchaseData ? '' : 'is-closed'}>
        <S.Title>Entrega</S.Title>
        <form className="margin-bottom" onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('fullName') ? 'error' : ''}
              required
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('address') ? 'error' : ''}
              required
            />
            <small>{getErrorMessage('address', form.errors.address)}</small>
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('city') ? 'error' : ''}
              required
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </div>
          <S.InputGroup>
            <div>
              <label htmlFor="CEP">CEP</label>
              <input
                type="text"
                name="CEP"
                id="CEP"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('CEP') ? 'error' : ''}
                required
              />
              <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                id="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('number') ? 'error' : ''}
                required
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </div>
          </S.InputGroup>
          <div>
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              type="text"
              name="reference"
              id="reference"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        </form>
        {form.dirty ? (
          <S.Button type="button" onClick={goToPayment}>
            Continuar com pagamento
          </S.Button>
        ) : (
          ''
        )}
        <S.Button type="button" onClick={backToCart}>
          Voltar para carrinho
        </S.Button>
      </S.Sidebar>
      <S.Sidebar className={paymentData ? '' : 'is-closed'}>
        <S.Title>Pagamento - Valor a pagar {formataPreco(getTotal())}</S.Title>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInput('cardName') ? 'error' : ''}
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          </div>
          <S.InputGroup>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cardNumber') ? 'error' : ''}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('cvv') ? 'error' : ''}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </div>
          </S.InputGroup>
          <S.InputGroup>
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                type="text"
                name="expiresMonth"
                id="expiresMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresMonth') ? 'error' : ''}
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                type="text"
                name="expiresYear"
                id="expiresYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInput('expiresYear') ? 'error' : ''}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
            </div>
          </S.InputGroup>
          <S.Button type="submit" className="margin-top" onClick={goToCheckout}>
            Finalizar pagamento
          </S.Button>
          <S.Button type="button" onClick={backToPurchase}>
            Voltar para a edição de endereço
          </S.Button>
        </form>
      </S.Sidebar>
      {isSuccess ? (
        <S.Sidebar className={checkout ? '' : 'is-closed'}>
          <S.Title>Pedido realizado - {data.orderId}</S.Title>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Button className="margin-top" onClick={finishPurchase}>
            Concluir
          </S.Button>
        </S.Sidebar>
      ) : (
        <S.Sidebar className={checkout ? '' : 'is-closed'}>
          <h3>Erro na transação</h3>
        </S.Sidebar>
      )}
    </S.CartContainer>
  )
}

export default Cart
