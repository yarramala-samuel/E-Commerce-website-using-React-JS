import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillHome, AiFillFormatPainter} from 'react-icons/ai';
import { BiUserPin, BiSolidMap} from 'react-icons/bi';
import { MdMiscellaneousServices } from 'react-icons/md';
import './nav.css'
const Nav = () => {
  return (
    <>
    <div className='header_container'>
        <div className='header_box'>
            <ul>
                <li><Link className='link' to='/'><AiFillHome /></Link></li>
                <li><Link className='link' to='/about'><BiUserPin /></Link></li>
                <li><Link className='link' to='/project'><AiFillFormatPainter /></Link></li>
                <li><Link className='link' to='/service'><MdMiscellaneousServices /></Link></li>
                <li><Link className='link' to='/contact'><BiSolidMap /></Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav