import React, { useContext } from 'react'
import { ContextImages } from '../ContextImagenes'
import './content.css'

function Content() {
    const { tab, handleChangeImg, img } = useContext(ContextImages)
    return (
        <div className="tab-content" id="myTabContent" >
            <div className={`tab-pane fade ${tab === "Crear" ? 'show active' : ''}`} id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

                <div className='mt-3 me-4'>
                    <label htmlFor="agregar_img" className='form-label'>Agregar Imagen</label>
                    <input type="file" id='agregar_img' className='form-control' multiple onChange={handleChangeImg} />
                    <div className='content-img'>
                        {img.map((item, index) => (
                            <img key={index} src={item} className='img' />
                        ))
                        }
                    </div>
                  
                </div>
            </div>


            <div className={`tab-pane fade ${tab === "Visualizar" ? 'show active' : ''}`} id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
             <h3 className='titulo_img mt-3 mb-3'> <span>Ima</span>genes</h3>
            <div className='content-img'>
                        {img.map((item, index) => (
                            <img key={index} src={item} className='img' />
                        ))
                        }
                    </div>

            </div>


        </div>
    )
}

export default Content