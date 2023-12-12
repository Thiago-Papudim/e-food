import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../types'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  openCheck: boolean
  openCard: boolean
  openMensagem: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  openCheck: false,
  openCard: false,
  openMensagem: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O prato já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheck: (state) => {
      state.openCheck = true
    },
    closeCheck: (state) => {
      state.openCheck = false
    },
    openCard: (state) => {
      state.openCard = true
    },
    closeCard: (state) => {
      state.openCard = false
    },
    openMensage: (state) => {
      state.openMensagem = true
    },
    closeMensage: (state) => {
      state.openMensagem = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openCheck,
  closeCheck,
  openMensage,
  closeMensage,
  closeCard,
  openCard,
  clear
} = cartSlice.actions
export default cartSlice.reducer
