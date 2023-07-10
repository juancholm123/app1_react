import React, { useContext } from 'react'
import { menu } from '../../datos'
import { ContextImages } from '../ContextImagenes'
import './menu.css'

function Menu() {

    const { handleChangeTabs,estado } = useContext(ContextImages)
    return (
        <ul className="opciones nav nav-tabs">
            {menu.map((item, index) =>
                <li className='nav-item' key={index} >
                    <a href="#" className={`border ${estado?'op2':'op'}`}  onClick={() => handleChangeTabs(item.titulo)} >
                        <div className='d-flex flex-column align-items-center justify-content-center'>
                            <item.icon className='icon' />
                            {item.titulo}
                        </div>
                    </a>
                </li>

            )}
        </ul>
    )
}

export default Menu