import {
  ChangeEvent,
  FormEvent,
  useState
} from 'react'

const useCustomForm = <T>(defaultValue: T) => {
  const [formData, setFormData] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(formData)
  }
  return {
    ...formData,
    formData,
    handleChange,
    onSubmit
  }
}

export default useCustomForm
