import Header from '../components/Header'
import Footer from '../components/Footer'

import Search from '../components/Search'
import Statistics from '../components/Statistics'
import Tables from '../components/Tables'
import FeatureCards from '../components/FeatureCards'

export default function Home () {
  return (
  <>
    <Header />
    <main>
      <Search />
      <Statistics />
      <div className="mt-8">
        <Tables />
      </div>
      <div className="mt-8">
        <FeatureCards />
      </div>
    </main>
    <Footer />
  </>
  )
}

export { reportWebVitals } from 'next-axiom'
