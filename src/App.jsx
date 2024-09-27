import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage'
import WatchHistory from './Pages/WatchHistory'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/watch-history" element={<WatchHistory/>} />
        </Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App
