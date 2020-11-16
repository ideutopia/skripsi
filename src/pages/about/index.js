import React from 'react'
import {Jumbotron} from '../../components/molecules'; 
import {Header, Footer} from '../../components/organism';
import {Tombol} from '../../components/atoms'

const About = () => {
    return (
        <div>
            <Header />
            <Jumbotron title="About" lead ="Halaman ini adalah halaman about" desc="Web ini dikembangkan untuk skripsi Muhammad Taftiyan Ilham Akbar" />
                <Tombol buttonName="Contact" />
            
            <Footer />
        </div>
    )
}

export default About
