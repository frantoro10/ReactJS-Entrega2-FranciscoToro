import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Componentes
import Home from '../pages/Home'
import Category from '../pages/Category'
import NavBarComponent from '../components/NavBarComponent/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const MainRouter = () => {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    )
}

export default MainRouter