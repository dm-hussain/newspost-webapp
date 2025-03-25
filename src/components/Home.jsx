import React from 'react'
// import LatestSlider from './LatestSlider'
import HeroSection from './HeroSection'
import { LatestSliderProvider } from '../contexts/LatestSliderContext'
import Slider from './Slider'

function Home() {
  return (<>
  
  <LatestSliderProvider > 
     {/* <LatestSlider /> */}
     <Slider />
     <HeroSection  />


     
     </LatestSliderProvider>
  </>
     
      
  )
}

export default Home