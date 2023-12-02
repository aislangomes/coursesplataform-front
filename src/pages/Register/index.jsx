import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents';
import '../styles.css'
import { api } from '../../services/api';

export const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSaveUser = async (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      password,
    }
    
    const response = await api.post("/create", data);
    console.log(response.data)
  }
  return (
    <LayoutComponents>
          <h1>Registre-se</h1>
          <form onSubmit={handleSaveUser} className="loginforms">
            <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Digite seu email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Registrar</button>
          </form>
          <div className="info">
            <div className='txt1-login'>Já possuo uma conta.</div>
            <Link to="/login">Fazer Login</Link>
          </div>
    </LayoutComponents>
  )
}