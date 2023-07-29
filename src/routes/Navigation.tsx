import {
  BrowserRouter, NavLink, Navigate, Route, Routes
} from 'react-router-dom'
import {
  FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage
} from '../pages'

const Navigation = () => (
  <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src="/react.svg" alt="react logo" width={100} />
        <ul>
          <li>
            <NavLink
              to="/custom-form"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Custom form
            </NavLink>
          </li>
          <li>
            <NavLink to="/formik-basic" className={({ isActive }) => (isActive ? 'nav-active' : '')}>Formik basic</NavLink>
          </li>
          <li>
            <NavLink to="/formik-yup" className={({ isActive }) => (isActive ? 'nav-active' : '')}>Formik Yup</NavLink>
          </li>
          <li>
            <NavLink to="/formik-components" className={({ isActive }) => (isActive ? 'nav-active' : '')}>Formik components</NavLink>
          </li>
          <li>
            <NavLink to="/formik-abstraction" className={({ isActive }) => (isActive ? 'nav-active' : '')}>Formik abstraction</NavLink>
          </li>
        </ul>

      </nav>

      <Routes>
        <Route path="/custom-form" element={<RegisterPage />} />
        <Route path="/formik-basic" element={<FormikBasicPage />} />
        <Route path="/formik-yup" element={<FormikYupPage />} />
        <Route path="/formik-components" element={<FormikComponents />} />
        <Route path="/formik-abstraction" element={<FormikAbstraction />} />

        <Route path="/*" element={<Navigate to="/custom-form" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default Navigation
