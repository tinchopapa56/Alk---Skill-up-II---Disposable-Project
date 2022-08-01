import React, {useState} from 'react'

const FormLogin = () => {
    // const [userData, setUserData] = useState({email:"", password:"",})
    // const handleInputs = (e) => {
    //     setUserData((prevUserData)=> {
    //         [...prevUserData], userData[e.target.name] = e.target.value
    //     })
    // }

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        if (!mail || !password){
            alert("completa la data")
        }
        else{
            window.location.href = "/login"

        }
    }


  return (
    <div>
        <form> 
            <h1>Iniciar Sesion</h1>
            <div> 
                <label>email</label>
                <input onChange={(e)=>setMail(e.currentTarget.value)} value="email" type="email" name="email"  required />
            </div>
            <div>     
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.currentTarget.value)} value="password" type="text" name="password" required />
            </div>
            <div> 
                <button onClick={handleSubmit} type="submit">Enviar</button>
            </div>
        </form> 
    </div>
  )
}

export default FormLogin