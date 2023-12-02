import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents';
import "../../loginstyle.css"

export const Register = () => {
  return (
    <LayoutComponents>
          <h1>Registre-se</h1>
          <form action="">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu email" />
            <input type="password" placeholder="Digite sua senha" />
            <button>Registrar</button>
          </form>
          <div className="info">
            <p>Já possuo uma conta.</p>
            <Link to="/login">Fazer Login</Link>
          </div>
    </LayoutComponents>
  )
}