import {
  BrowserRouter, NavLink, Navigate, Route, Routes
} from 'react-router-dom'
import { LINKS } from '../constants'

const Navigation = () => (
  <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src="/react.svg" alt="react logo" width={100} />
        <ul>
          {
            LINKS.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  {label}
                </NavLink>
              </li>
            ))
          }
        </ul>

      </nav>

      <Routes>
        {
          LINKS.map(({ component: Page, path }) => (
            <Route key={path} path={path} element={<Page />} />
          ))
        }

        <Route path="/*" element={<Navigate to="/custom-form" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default Navigation
