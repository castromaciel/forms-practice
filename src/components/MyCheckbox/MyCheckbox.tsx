import { useField } from 'formik'

interface Props {
  label: string
  name: string
  [x: string]: any
}

const MyCheckbox = ({
  label,
  ...props
}: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label className="custom-label" htmlFor={props.name}>
        <input {...field} {...props} type="checkbox" id={props.name} />
        {label}
      </label>
      {
        meta.touched && meta.error && (
          <span className="error">{meta.error}</span>
        )
      }
    </>
  ) 
}

export default MyCheckbox
