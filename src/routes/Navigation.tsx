import {
  BrowserRouter, NavLink, Navigate, Route, Routes
} from 'react-router-dom'

const Navigation = () => (
  <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src="/react.svg" alt="react logo" width={100} />
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Home

            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : '')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-active' : '')}>Users</NavLink>
          </li>
        </ul>

      </nav>
    </div>

    <Routes>
      <Route path="about" element={<h1>about</h1>} />
      <Route path="users" element={<h1>users</h1>} />
      <Route path="home" element={<h1>home</h1>} />

      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>

  </BrowserRouter>
)

export default Navigation