import { BennerStyle } from './styles'

type Props = {
  capa: string
  avaliacao: number
  titulo: string
}

const Banner = ({ capa, avaliacao, titulo }: Props) => (
  <BennerStyle>
    <img src={capa} alt={titulo} />
    <div className="container">
      <h3>{avaliacao}</h3>
      <h2>{titulo}</h2>
    </div>
  </BennerStyle>
)

export default Banner
