import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import { AuthContext } from '../../context/auth';


export const Home = () => {
  const { signOut } = useContext(AuthContext)

  // const [all, setAll] = useState('')

  return (
    <div className = 'container-home'>
      <div className='container-header'>
        <nav>
          <input type="search" placeholder="Buscar curso" />
          <div className="menu">
          <Link to="/course" className='link-button'><button className='my-button'>+ Curso</button></Link>
          <Link to="/login"className='link-button'><button className='my-button' onClick={signOut}>Sair</button></Link>            
          </div>
        </nav>
      </div>
      <main>
        <ul>
          <li>
            <div className="coursetopic">
              <img src="" alt="foto docurso" />
              <h1>Nome do Curso</h1>
              <h2>Professor<span>Categoria</span></h2>
              <p>Descrição</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};
