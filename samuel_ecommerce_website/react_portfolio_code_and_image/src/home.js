import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <>
    <div className='home_container'>
        <div className='left'>
            <div className='img_box'>
                <img src='image/home-left-1.png' alt='banner'></img>
            </div>
        </div>
        <div className='right'>
            <div className='contant'>
                <h3>this is me</h3>
                <h2>travor james</h2>
                <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                <button><Link to='/about' className='link'>Discover Now</Link></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home