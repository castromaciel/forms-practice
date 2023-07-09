import { useCustomForm } from '../hooks'

const RegisterPage = () => {
  const {
    email, name, password1, password2, isEmailValid, onReset, onSubmit, handleChange 
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
          className={`${name.trim().length <= 0 ? 'has-error' : ''}`}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input 
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
          className={`${!isEmailValid(email) ? 'has-error' : ''}`}
        />
        {!isEmailValid(email) && <span>Email no es valido</span>}

        <input 
          type="password"
          placeholder="Password"
          name="password1"
          id="password1"
          onChange={handleChange}
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {
          password1.trim().length < 6
          && password1.trim().length > 0
          && <span>La contraseña debe tener más de 6 caracteres</span>
        }

        <input 
          type="password"
          placeholder="Repeat Password"
          name="password2"
          id="password2"
          onChange={handleChange}
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {
          password2.trim().length > 0
          && password1 !== password2
          && <span>Las contraseñas deben ser iguales</span>
        }

        <button type="submit">Enviar</button>
        <button type="button" onClick={onReset}>Reset</button>
      </form>
    </div>
  ) 
}

export default RegisterPage
