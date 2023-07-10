import React, { useContext } from 'react'
import { ContextImages } from './ContextImagenes'
import MenuComponent from './Menu/Menu'
import ContentComponent from './Contentenido/Content'
import './main.css'


function Main() {

  return (
    <div className='container principal'>
      <MenuComponent />
      <ContentComponent />
    </div>
  )
}

export default Main