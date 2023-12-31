import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYupPage = () => {
  const {
    errors, getFieldProps, handleSubmit, touched
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Field is required'),
      lastName: Yup.string()
        .max(12, 'Must be 12 characters or less')
        .required('Field is required'),
      email: Yup.string()
        .email('Field must be a valid email address')
        .max(15, 'Must be 15 characters or less')
        .required('Field is required')
    })
  })

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First name
          <input
            type="text"
            id="firstName"
            {... getFieldProps('firstName')}
          />
        </label>
        {touched.firstName && errors?.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            id="lastName"
            {... getFieldProps('lastName')}
          />
        </label>
        {touched.lastName && errors?.lastName && <span>{errors.lastName}</span>}
        
        <label htmlFor="email">
          Email address
          <input
            type="email"
            id="email" 
            {... getFieldProps('email')}
          />
        </label>
        {touched.email && errors?.email && <span>{errors.email}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormikYupPage
