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

  const isEmailValid = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const onReset = () => setFormData(defaultValue)

  return {
    ...formData,
    formData,
    handleChange,
    isEmailValid,
    onReset,
    onSubmit
  }
}

export default useCustomForm
