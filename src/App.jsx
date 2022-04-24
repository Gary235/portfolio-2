import Home from "./views/home/Home"
import AboutMe from "./views/about-me/AboutMe"
import MyProjects from "./views/my-projects/MyProjects"

import Nav from "./components/nav/Nav"

import { AppLayout } from "./styled-components/app-layout"

const App = () => {

  return (
    <AppLayout>
      <Nav />
      <Home />
      <AboutMe />
      {/* <MyProjects /> */}
      {/* <Contact />
      <Footer /> */}
    </AppLayout>
  )
}

export default App
