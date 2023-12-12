import axios from 'axios'
import { useEffect, useState } from 'react'

export function useAPI<Restaurante>(url: string) {
  const [data, setData] = useState<Restaurante>()

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error)
      })
  }, [url])

  return { data }
}
