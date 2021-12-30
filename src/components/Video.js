import React from 'react'
import './VideoStyles.css'

import tedxvideo from '../assets/TEDxIntro.mp4'
import { Link } from 'react-router-dom'
export const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id = 'video'>
                <source src= {tedxvideo} type='video/mp4'/>
            </video>
            <div className='content'>
                <h1>TEDx main page</h1>
                <p>upcoming events</p>

            
            <div>
                <Link to = '/talks' className='btn'>Talks</Link>
                <Link to = '/team' className='btn btn-lighy'>Team</Link>
            </div>
        </div>
        </div>
    )
}
export default Video