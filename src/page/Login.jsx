import { useState } from "react";
import { useUserLoginMutation } from "../redux/features/auth/authUserApi";


const Login = () => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const [userLogin, { data, error }] = useUserLoginMutation();
    console.log(error, data)
    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin({ fullName: name, password: pass, emailId: "", designation: "", userMessage: "", accessToken: "" })
    }
    return (
        <>
            <h2>Login</h2>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="passwoard" placeholder='pass' onChange={(e) => setPass(e.target.value)} />
                <button type='submit'>Login</button>
            </form>

        </>
    )
}

export default Login;