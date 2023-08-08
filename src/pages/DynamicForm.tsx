import { Form, Formik } from 'formik'
import { HTMLInputTypeAttribute } from 'react'
import * as Yup from 'yup'
import { MySelectInput, MyTextInput } from '../components'
import jsonForm from '../db/custom-form.json'

const DynamicForm = () => {
  const initialValues: {[x:string]: string} = {}
  const requiredFields: {[x:string]: any} = {}

  jsonForm.forEach((field) => {
    initialValues[field.name] = field.value

    if (!field.validations?.length) return

    let schema = Yup.string()

    field.validations.forEach((validation) => {
      if (validation.type === 'required') {
        schema = schema.required('This field is required')
      }

      if (validation.type === 'minLength') {
        schema = schema.min(validation.value! || 2, `Must be at least ${validation.value! || 2} characters`)
      }
      
      if (validation.type === 'email') {
        schema = schema.email('Field must be a valid email address')
      }
    })

    requiredFields[field.name] = schema
  })

  const validationSchema = Yup.object({ ...requiredFields })

  return (
    <div>
      <h1>Dynamic Form</h1>
    
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        { () => (
          <Form noValidate>
            {
              jsonForm.map(({
                type, name, placeholder, label, ...rest 
              }) => {
                switch ((type as HTMLInputTypeAttribute)) {
                  case 'input':
                  case 'email':
                  case 'password':
                    return (
                      <MyTextInput
                        key={name}
                        type={(type as any)}
                        label={label} 
                        name={name}
                        placeholder={placeholder}
                      />
                    )
                  
                  case 'select':
                    return (
                      <MySelectInput key={name} label={label} name={name}>
                        <option>Pick something</option>
                        {rest.options?.map(({ id, label }) => (
                          <option key={label} value={id}>{label}</option>
                        ))}
                      </MySelectInput>
                    )

                  default:
                    return (
                      <h1>
                        {`${name} not supported`}
                      </h1>
                    )
                }
              })
            }
            <button type="submit">Form</button>
          </Form>
        )}
      </Formik>
    </div>
  ) 
}

export default DynamicForm
