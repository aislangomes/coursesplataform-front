import { useContext } from "react"
import { Navigate} from "react-router-dom"
import { AuthContext } from "../context/auth"

export const PrivateRoute = ({children}) => {
  const {signed} = useContext(AuthContext)
  console.log('Logado?', signed)

  return signed ? <>{children}</> : <Navigate to='/login' />;
}