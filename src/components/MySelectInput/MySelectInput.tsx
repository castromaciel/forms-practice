import { useField } from 'formik'

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
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select {...field} {...props} id={id} />
      {
        meta.touched && meta.error && (
          <span className="error">{meta.error}</span>
        )
      }
    </>
  ) 
}

export default MySelectInput
