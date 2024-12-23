import Logo from "../assets/faintLogo.png"
import Card from "../components/Login/Card"
import Form from "../components/Login/Form"
const Login = () => {
  return (
    <div className="flex items-center">
        <Card />
        <Form />
        <img src={Logo} alt="Logo" className="absolute left-0 bottom-0" />
    </div>
  )
}

export default Login