import { useCustomForm } from '../hooks'

const RegisterPage = () => {
  const {
    email, name, password1, password2, onSubmit, handleChange 
  } = useCustomForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleChange}
          value={name}
        />
        <input 
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
        <input 
          type="password"
          placeholder="Password"
          name="password1"
          id="password1"
          onChange={handleChange}
          value={password1}
        />
        <input 
          type="password"
          placeholder="Repeat Password"
          name="password2"
          id="password2"
          onChange={handleChange}
          value={password2}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  ) 
}

export default RegisterPage
