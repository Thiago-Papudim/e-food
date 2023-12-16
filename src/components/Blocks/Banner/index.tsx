import { BennerStyle } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
  <BennerStyle>
    <img src={capa} alt={titulo} />
    <div className="container">
      <h3>{tipo}</h3>
      <h2>{titulo}</h2>
    </div>
  </BennerStyle>
)

export default Banner
