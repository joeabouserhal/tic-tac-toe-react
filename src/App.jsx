import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Welcome from "./pages/welcome/Welcome"
import Play from "./pages/play/Play"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </div>
  )
}

export default App
