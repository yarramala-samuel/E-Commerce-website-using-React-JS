import React from 'react'
import './services.css';
import { BiSolidCity } from 'react-icons/bi';
import { FaCity } from 'react-icons/fa';
import { SiReactos } from 'react-icons/si';
const Services = () => {
  return (
    <>
    <div className='services'>
        <div className='service_banner'>
            <p>Home.services</p>
            <h3>Services</h3>
        </div>
        <div className='container'>
            <h3>offiring to my client</h3>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
            <div className='box_container'>
                
            <div className='box'>
                    <div className='icon'>
                        <BiSolidCity />
                    </div>
                    <div className='detail'>
                        <h4>ARCHITECTURE</h4>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <FaCity />
                    </div>
                    <div className='detail'>
                        <h4>INTERIOR DESIGN</h4>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <SiReactos />
                    </div>
                    <div className='detail'>
                        <h4>CONCEPT DESIGN</h4>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <BiSolidCity />
                    </div>
                    <div className='detail'>
                        <h4>ARCHITECTURE</h4>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <FaCity />
                    </div>
                    <div className='detail'>
                        <h4>INTERIOR DESIGN</h4>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <SiReactos />
                    </div>
                    <div className='detail'>
                        <h4>CONCEPT DESIGN</h4>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services