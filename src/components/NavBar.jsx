import useDropDown from '../hooks/useDropdown'
import '../styles/components/navBar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

export default function NavBar() {

  const {dropdownOpen, dropdownChangeState, dropdownStyle} = useDropDown()

  return (
    <nav className='nav'>
      <a className='rbn' href='#'> <h1>Rubxn</h1></a>
      <div className='nav-links'>
          <a href='#Proyectos'><h1>Proyectos</h1></a>
          <a href='#SobreMi'><h1>Sobre mí</h1></a>
      </div>
      <div className='nav-dropdown-menu'
      onClick={dropdownChangeState}>
        {
          dropdownOpen
          ? <CloseIcon className='nav-dropdown-menu-button' fontSize='large'/>
          : <MenuIcon className='nav-dropdown-menu-button' fontSize='large'/>
        }
      </div>
      <div className='nav-dropdown-links' style={dropdownStyle}>
        <div className='nav-dropdown-links-list'>
          <a href='#Proyectos'><h1>Proyectos</h1></a>
          <a href='#SobreMi'><h1>Sobre mí</h1></a>         
        </div>
      </div>
    </nav>
  )
}
