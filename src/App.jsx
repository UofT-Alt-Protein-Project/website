import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import CAPS from './pages/CAPS'
import JoinUs from './pages/JoinUs'
import TheTeam from './pages/TheTeam'
import WhoAreWe from './pages/WhoAreWe'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CAPS" element={<CAPS />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/TheTeam" element={<TheTeam />} />
          <Route path="/WhoAreWe" element={<WhoAreWe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}