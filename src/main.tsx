import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes/app.router.tsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { THEME } from './themes/themes'

const ElementRoot = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(ElementRoot).render(
  <React.StrictMode>
    <ChakraProvider theme={THEME}>
      <ColorModeScript initialColorMode={THEME.config.initialColorMode} />
      <AppRoutes />
    </ChakraProvider>
  </React.StrictMode>
)
