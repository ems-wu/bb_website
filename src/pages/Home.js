import React from 'react'
import Navbar from '../components/Header/Navbar'

import '../styles/Home.css'

const Home = () => {
    return (
        <>
        <Navbar/>
        <main>
            <section className="welcome">
                Home Page
            </section>
        </main>
        </>
    )
}

export default Home