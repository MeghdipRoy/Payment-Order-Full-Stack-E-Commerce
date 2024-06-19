import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top Airpods"}/>
      <HorizontalCardProduct category={"camera"} heading={"Populer Camera"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Populer Mobiles"}/>
  

    </div>
  )
}

export default Home
/***      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
        <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
          <VerticalCardProduct category={"camera"} heading={"Camera & Photogrphy"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Populer Mobiles"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
    <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
   <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>







*/