import { Form, Formik } from 'formik'
import { HTMLInputTypeAttribute } from 'react'
import { MySelectInput, MyTextInput } from '../components'
import jsonForm from '../db/custom-form.json'

const DynamicForm = () => {
  const initialValues: {[x:string]: string} = {}
  jsonForm.forEach((field) => {
    initialValues[field.name] = field.value
  })

  return (
    <div>
      <h1>Dynamic Form</h1>
    
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
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
