import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

const RegisterFormik = () => (
  <div>
    <h1>Register Formik page</h1>

    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Field is required')
          .min(2, 'Must be at least 2 characters')
          .max(15, 'Must be 15 characters or less'),
        email: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .email('Field must be a valid email address')
          .required('Field is required'),
        password: Yup.string()
          .required('Field is required')
          .min(6, 'Must be at least 6 characters')
          .max(15, 'Must be 15 characters or less'),
        passwordConfirmation: Yup.string()
          .required('Field is required')
          .oneOf([Yup.ref('password')], 'Passwords must match')
      })}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleReset }) => (
        <Form>
          <MyTextInput 
            type="text"
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
          <MyTextInput 
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
          <MyTextInput
            type="password" 
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
          <MyTextInput
            type="password" 
            label="Confirm your password"
            name="passwordConfirmation"
            placeholder="Repeat your password "
          />

          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default RegisterFormik
