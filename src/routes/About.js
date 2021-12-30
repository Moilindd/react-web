import React from 'react'
import Footer from '../components/Footer'
import HeroImages from '../components/HeroImages'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImages heading = 'About.' text = 'ted-About'/>

            <Footer />
        </div>
    )
}

export default About
