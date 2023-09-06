import React from 'react'
// componentes
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import {ProductsData} from "../json/ProductsData"


const Home = () => {
  return (
    <ItemListContainer productsData={ProductsData} />
    
  )
}

export default Home