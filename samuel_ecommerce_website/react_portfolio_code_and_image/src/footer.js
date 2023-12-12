import React from 'react'
import { BiRightArrowAlt, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube} from 'react-icons/bi';
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer_container'>
        <div className='contant'>
            <div className='box'>
                <h3>about me</h3>
                <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                <p>Copyright ©2023 All rights reserved | This template is made with love by <span>Creative Tutorial</span></p>
            </div>
            <div className='box'>
                <h3>newsletter</h3>
                <p>Stay updated with our latest trends</p>
                <div className='form'>
                    <input type='text' placeholder='Email Address'></input>
                    <button><BiRightArrowAlt /></button>
                </div>
            </div>
            <div className='box'>
                <h3>follow me</h3>
                <p>Let us be social</p>
                <div className='icon'>
                    <li><BiLogoFacebook /></li>
                    <li><BiLogoInstagram /></li>
                    <li><BiLogoTwitter /></li>
                    <li><BiLogoYoutube /></li>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer