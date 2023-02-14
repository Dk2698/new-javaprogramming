import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {

    const [username, setUsername] = useState('kumar')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setshowErrorMessage] = useState(false)


    const  navigate = useNavigate();

    const authContext = useAuth()

    function handlerUsernameChange(event) {
        //     console.log(event)
        console.log(event.target.value)
        // setUsername instanc changed
        setUsername(event.target.value)

    }
    function handlerPasswordChange(event) {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit1(){
        // console.log(username);
        // console.log(password);
        if(username === "kumar" && password === "12345"){
            authContext.setAuthenticated(true)
            console.log("Success")
            setShowSuccessMessage(true);
            setshowErrorMessage(false)
            // navigate('/welcome/kumar')
            navigate(`/welcome/${username}`)

        }else{
            authContext.setAuthenticated(false)
            console.log("Faild")
            setShowSuccessMessage(false);
            setshowErrorMessage(true)
        }
    }

    function handleSubmit(){

        if(authContext.login(username ,password)){
            // setShowSuccessMessage(true);
            // setshowErrorMessage(false)
            // navigate('/welcome/kumar')
            navigate(`/welcome/${username}`)

        }else{
            // setShowSuccessMessage(false);
            setshowErrorMessage(true)
        }
    }

    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return  <div className="successMessage">Authenticated Successfully</div>
        }
        return null
    }

    function ErrorMessageComponent(){
        if(showErrorMessage){
            return  <div className="errorMessage">Authenticated Failed, Please check your credntials</div> 
        }
        return null
    }

    return (
        <div className="Login">
            {/* <div className="successMessage">Authenticated Successfully</div> */}
            {/* <div className="errorMessage">Authenticated Failed, Please check your credntials</div> */}
            {/* <SuccessMessageComponent/>
            <ErrorMessageComponent/> */}
            <h1>Welcome Login</h1>
            {/* {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>} */}
            {showErrorMessage &&  <div className="errorMessage">Authenticated Failed, Please check your credntials</div> }
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username}
                        onChange={handlerUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"
                    value={password}
                    onChange={handlerPasswordChange}
                    />
                </div>
                <div>
                    <button type="button" name="login"
                    onClick={handleSubmit}
                    >Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent