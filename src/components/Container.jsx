import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Container() {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Container