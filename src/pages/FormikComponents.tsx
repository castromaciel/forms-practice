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
        email: '',
        terms: false,
        jobType: ''
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
          .required('Field is required'),
        terms: Yup.boolean()
          .oneOf([true], 'Must be accept terms and conditions'),
        jobType: Yup.string()
          .oneOf(['developer', 'designer', 'scrum-master'])
          .required('Field is required')
      })}
    >
      {() => (
        <Form>
          <label htmlFor="firstName">First name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="span" />
           
          <label htmlFor="lastName">Last name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" component="span" />
           
          <label htmlFor="email">Email address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="span" />

          <label htmlFor="jobType">Job Type</label>
          <Field name="jobType" as="select">
            <option>Pick Something</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="scrum-master">Scrum master</option>
          </Field>
          <ErrorMessage name="jobType" component="span" />

          <label className="custom-label">
            <Field name="terms" type="checkbox" />
            Terms and conditions
          </label>
          <ErrorMessage name="terms" component="span" />
   
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
     
  </div>
)

export default FormikComponents
