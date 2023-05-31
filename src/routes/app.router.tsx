import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { App } from '../App'
import { Home } from '../pages/Home'
import { Glossary } from '../pages/Glossary'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/glossary" element={<Glossary />} />
        </Route>
      </Routes>
    </Router>
  )
}
