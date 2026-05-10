import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Vault from './pages/Vault'
import Add from './pages/Add'
import Generate from './pages/Generate'
import Audit from './pages/Audit'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/add" element={<Add />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/audit" element={<Audit />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}