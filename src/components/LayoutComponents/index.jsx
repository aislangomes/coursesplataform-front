import "./style.css"

export const LayoutComponents = (props) => {
  return(
    <div className="container">
      <div className="container-login">{props.children}</div>
    </div>
  )
}