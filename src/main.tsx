import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/app.router.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { THEME } from './themes/themes'

const ElementRoot = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(ElementRoot).render(
  <React.StrictMode>
    <ChakraProvider theme={THEME}>
      <AppRoutes />
    </ChakraProvider>
  </React.StrictMode>
)
