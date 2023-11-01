import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./shared/styles/themes/default"
import { GlobalStyle } from "./shared/styles/global.styled"
import { GithubBlog } from "./page"

function App() {

  

  return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
      <GithubBlog/>
  </ThemeProvider>
  )
}

export default App
