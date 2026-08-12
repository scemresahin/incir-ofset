import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Matbaa from './pages/Matbaa'
import Promosyon from './pages/Promosyon'
import Reklam from './pages/Reklam'
import Iletisim from './pages/Iletisim'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/matbaa" element={<Matbaa />} />
        <Route path="/promosyon" element={<Promosyon />} />
        <Route path="/reklam" element={<Reklam />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Route>
    </Routes>
  )
}
