import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/leeyflix.png'
import './style.css'
import LinkButton from '../Link-Button'

export default function Menu(){
  return(
    <>
    <nav className='menu'>
      <Link to='/'>
        <img className='logo' src={logo} alt="logo"/>
      </Link>

      <LinkButton to='cadastro/video'>
        Novo video
      </LinkButton>
      
    </nav>
     
    </>
  )
}