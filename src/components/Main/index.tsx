import RestaurantList from '../Blocks/RestaurantList'
import { Items, Section } from './styles'

const Main = () => (
  <main>
    <Section>
      <Items className="container">
        <RestaurantList />
      </Items>
    </Section>
  </main>
)

export default Main
