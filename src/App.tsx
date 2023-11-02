import About from "./components/about/About"
import Chamada from "./components/chamada/Chamada"
import DownloadSection from "./components/downloadSection/DownloadSection"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import PostsContainer from "./components/posts/PostsContainer"
import Register from "./components/register/Register"

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* fim do header */}
      <Hero />
      {/* chamada */}
      <Chamada />
      {/* Area dos posts */}
      <PostsContainer />
      {/* About */}
      <About />
      {/* Download Section */}
      <DownloadSection />
      {/* Register Section */}
      <Register />
      {/* Rodapé */}
      <Footer />
    </div>
  )
}

export default App