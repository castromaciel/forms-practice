import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelectInput, MyTextInput } from '../components'

const FormikAbstractions = () => (
  <div>
    <h1>Formik Abstractions</h1>

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
          <MyTextInput
            id="firstName"
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
          />

          <MyTextInput
            id="lastName"
            name="lastName"
            label="Last name"
            placeholder="Enter your last name"
          />

          <MyTextInput
            id="email"
            name="email"
            label="Email address"
            placeholder="example@email.com"
          />

          <MySelectInput label="Job Type" name="jobType">
            <option>Pick Something</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="scrum-master">Scrum master</option>
          </MySelectInput>

          <MyCheckbox
            label="Terms and conditions"
            name="terms"
          />
   
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
     
  </div>
)

export default FormikAbstractions
