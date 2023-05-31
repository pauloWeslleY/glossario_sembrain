import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { App } from '../App'
import { Home } from '../pages/Home'
import { Symbol } from '../pages/Symbol'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/symbol" element={<Symbol />} />
        </Route>
      </Routes>
    </Router>
  )
}
