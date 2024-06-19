import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offers from '../Components/Offers/Offers'
import PopularProduct from '../Components/PopularProduct/PopularProduct'

const ShopPage = () => {
  return (
    <div>
      <Hero/>
      <PopularProduct/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default ShopPage
