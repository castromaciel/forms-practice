/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ErrorMessage, Field, Form, Formik
} from 'formik'
import * as Yup from 'yup'

const FormikComponents = () => (
  <div>
    <h1>Formik Components</h1>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Field is required'),
        lastName: Yup.string()
          .max(12, 'Must be 12 characters or less')
          .required('Field is required'),
        email: Yup.string()
          .email('Field must be a valid email address')
          .required('Field is required')
      })}
    >
      {() => (
        <Form>
          <label htmlFor="firstName">First name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
           
          <label htmlFor="lastName">Last name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
           
          <label htmlFor="email">Email address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
   
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
     
  </div>
)

export default FormikComponents
