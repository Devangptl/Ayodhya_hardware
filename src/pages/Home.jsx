import React from 'react'
import { Header } from '../components/Header'
import { HomeItem } from '../components/HomeItem'
import { Treding } from '../components/Treding'
import { Offer } from '../components/Offer'

export const Home = () => {
  return (
    <div>
        <Header/>
        <HomeItem/>
        <Treding/>
        <Offer/>
    </div>
  )
}
