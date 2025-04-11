import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Features from './components/Features'
import PremiumPlan from './components/PremiumPlan'
import ArtistsWeek from './components/ArtistsWeek'
import Join from './components/Join'
import SwipesCounter from './components/SwipesCounter'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Features/>
      <PremiumPlan/>
      <ArtistsWeek/>
      <Join/>
      <SwipesCounter/>
      <Footer/>
    </div>
  )
}

export default Home
