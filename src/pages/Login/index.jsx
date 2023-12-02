import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents';
import { AuthContext } from '../../context/auth';
import '../styles.css'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn, signed } = useContext(AuthContext)

  const handleSignIn = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    await signIn(data)
  }

  if(signed){
    return <Navigate to="/home" />
  } else {
    return (
      <LayoutComponents>
        <h1>Realize o Login</h1>
        <form onSubmit={handleSignIn} className="loginforms">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type='submit'>Login</button>
        </form>
        <div className="info">
          <div className='txt1-login'>Não possui conta?</div>
          <Link to="/register">Criar Conta</Link>
        </div>
      </LayoutComponents>
    )
  }
}