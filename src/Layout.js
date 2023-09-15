import React from 'react'
import Footer from './Components/Footer'
import NavBar from './Components/Header/NavBar'

const Layout = (props) => {
    return (
        <>
                <NavBar />
                <main className="main bg-white">
                    {props.children}
                </main>
                <Footer />
        </>
    )
}

export default Layout