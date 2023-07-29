import { useField } from 'formik'
import { HTMLInputTypeAttribute } from 'react'

interface Props {
  label: string
  name: string
  id?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  [x: string]: any
}

const MyTextInput = ({
  label,
  id,
  type = 'text',
  placeholder = 'placeholder',
  ...props
}: Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...field} {...props} type={type} id={id} placeholder={placeholder} />
      {
        meta.touched && meta.error && (
          <span className="error">{meta.error}</span>
        )
      }
    </>
  ) 
}

export default MyTextInput
