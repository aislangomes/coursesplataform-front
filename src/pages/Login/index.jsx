import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../components/LayoutComponents';
import "../../loginstyle.css"

export const Login = () => {
  return (
    <LayoutComponents>
          <h1>Realize o Login</h1>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Login</button>
          </form>
          <div className="info">
            <p>Não possui conta?</p>
            <Link to="/register">Criar Conta</Link>
          </div>
    </LayoutComponents>
  )
}