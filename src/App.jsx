import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Dashboard from "./views/Dashboard"
import Login from "./views/Login"

const App = () => {
  return (
    <div className="max-w-[1408px] mx-auto">
      <Router>
        <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App