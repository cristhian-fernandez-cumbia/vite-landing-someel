import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CallToAction from './CallToAction'
import Steps from './Steps'

const Home = () => {
  return (
    <div className='pb-8'>
      <Header />
      <Banner />
      <Steps />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home