import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string
  name: string
  id?: string
  [x: string]: any
}

const MySelectInput = ({
  label,
  id,
  ...props
}: Props) => {
  const [field] = useField(props)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select {...field} {...props} id={id} />
      <ErrorMessage name={props.name} component="span" />
    </>
  ) 
}

export default MySelectInput
