import { FormikErrors, useFormik } from 'formik'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const FormikBasicPage = () => {
  const validate = ({ email, firstName, lastName }: FormValues) => {
    const errors:FormikErrors<FormValues> = {}
    
    if (!firstName) {
      errors.firstName = 'Required'
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if (!lastName) {
      errors.lastName = 'Required'
    } else if (lastName.length >= 12) {
      errors.lastName = 'Must be 12 characters or less'
    }

    if (!email) {
      errors.email = 'Required'
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const {
    handleChange, values: {
      email, firstName, lastName
    }, handleSubmit, errors, touched, handleBlur
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate,
    validateOnBlur: true
  })

  return (
    <div>
      <h1>Formik Basic</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First name
          <input
            type="text"
            name="firstName"
            id="firstName" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={firstName}
          />
        </label>
        {touched.firstName && errors?.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={lastName}
          />
        </label>
        {touched.lastName && errors?.lastName && <span>{errors.lastName}</span>}
        
        <label htmlFor="email">
          Email address
          <input
            type="email"
            name="email"
            id="email" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
          />
        </label>
        {touched.email && errors?.email && <span>{errors.email}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormikBasicPage
