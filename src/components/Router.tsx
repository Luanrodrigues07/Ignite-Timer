import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/index'
import { History } from '../pages/Home/History'
import { DefaultLayout } from '../layouts/DefaultLayouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Route>
    </Routes>
  )
}
