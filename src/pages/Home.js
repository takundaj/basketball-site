import React, { useState } from 'react'
import Categories from '../components/CategoriesList'
import Slider from '../components/Slider'
import Title from '../components/Title'

export default function Home() {

  return (
    <div>
      <Slider></Slider>
      <Title title={'CATEGORIES'} subtitle={''}></Title>
      <Categories></Categories>
    </div>
  )
}
