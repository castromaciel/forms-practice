import { useFormik } from 'formik'

const FormikBasicPage = () => {
  const {
    handleChange, values: {
      email, firstName, lastName
    }, handleSubmit
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
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
            value={firstName}
          />
        </label>
        <span>First name is required</span>
        
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={lastName}
          />
        </label>
        <span>Last name is required</span>
        
        <label htmlFor="email">
          Email address
          <input
            type="email"
            name="email"
            id="email" 
            onChange={handleChange}
            value={email}
          />
        </label>
        <span>Email is required</span>
        <span>Check for an valid email format</span>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormikBasicPage
