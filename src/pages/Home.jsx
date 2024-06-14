import React from 'react'
import { Header } from '../components/Header'
import { HomeItem } from '../components/HomeItem'
import { Treding } from '../components/Treding'
import { Offer } from '../components/Offer'
import { Blog } from '../components/Blog'
import { Instagram } from '../components/Instagram'
import { Policy } from '../components/Policy'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Header/>
        <HomeItem/>
        <Treding/>
        <Offer/>
        <Blog/>
        <Instagram/>
        <Policy/>
        <Footer/>
    </div>
  )
}
