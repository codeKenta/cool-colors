/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../../styles/theme'

import Page from '../Page'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  )
}

export default App
