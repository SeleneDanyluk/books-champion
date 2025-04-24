import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import NavBar from './Navbar'


const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout