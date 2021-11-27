import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayoutComponent from './components/layouts/MainLayoutComponent'

const App = () => {
    return (
        <React.Fragment>
            <ChakraProvider>
                <BrowserRouter>
                    <MainLayoutComponent />
                </BrowserRouter>
            </ChakraProvider>
        </React.Fragment>
    )
}

export default App
