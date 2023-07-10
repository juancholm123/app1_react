import React, { createContext, useState } from 'react'
export const ContextImages = createContext()

export function ProviderImagenes(props) {
    const [tab, setTabs] = useState("Crear")
    const [img, setImg] = useState([])
    const [estado, setEstado] = useState(false)


    const handleChangeTabs = (tabs) => {
        setTabs(tabs)
    }

    const handleChangeImg = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const imagenes = files.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    }
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                })
            })
            try {
                const results = await Promise.all(imagenes);
                setImg(results);
                setEstado(true)
            } catch (error) {
                console.error('Error reading images:', error);
            }
        }
      
    }


    return (
        <ContextImages.Provider value={{ estado, img, tab, handleChangeTabs, handleChangeImg }}>
            {props.children}
        </ContextImages.Provider>
    )
}

