import React from 'react'
import './FooterStyles.css'
import {FaMailBulk,FaSearchLocation,FaFacebook
 } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color : '#ffffff',marginRight:'2rem'}}/>
                    
                    
                    <div>
                        <p>Mumbai,Maharashtra</p>
                        <p>india</p>
                    </div>
                    </div>
                   
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color : '#ffffff',marginRight:'2rem'}}/>tedict@gmail.com</h4>
                    </div>
                    
                </div>

                <div className='right'>
                    <h4>About the Event</h4>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, esse odio quas dolore unde explicabo nobis consectetur non minus ducimus perspiciatis velit excepturi asperiores recusandae aut iure sunt labore incidunt?"</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color : '#ffffff',marginRight:'1rem'}}/>
                        <FaInstagram size={30} style={{color : '#ffffff',marginRight:'1rem'}}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Footer
