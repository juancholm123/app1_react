
import React from 'react'
import ComponetMain from './Imagenes/Main'
import { ProviderImagenes } from './Imagenes/ContextImagenes'
function App() {
    return (
        <ProviderImagenes>
            <ComponetMain />
        </ProviderImagenes>


    )
}

export default App