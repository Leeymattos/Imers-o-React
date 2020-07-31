import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/leeyflix.png'
import './style.css'


export default function MenuPages(){
  return(
    <>
    <nav className='menu'>
      <Link to='/'>
        <img className='logo' src={logo} alt="logo"/>
      </Link>
    </nav>
    </>
  )
}