import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Results from './pages/Results'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/step1" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}
