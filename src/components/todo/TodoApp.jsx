import { useState } from 'react'
import { BrowserRouter,Routes , Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp" style={{ textAlign: "center" }}>
            {/* Todo Mangement Aplication */}
            <HeaderComponent/>

            <BrowserRouter>
                <Routes>
                    <Route path='' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='/todos' element={<ListTodosComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>  

            <FooterComponent/>          
        </div>
    )
}



function LoginComponent() {

    const [username, setUsername] = useState('kumar')
    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setshowErrorMessage] = useState(false)


    const  navigate = useNavigate();

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

    function handleSubmit(){
        // console.log(username);
        // console.log(password);
        if(username === "kumar" && password === "12345"){
            console.log("Success")
            setShowSuccessMessage(true);
            setshowErrorMessage(false)
            // navigate('/welcome/kumar')
            navigate(`/welcome/${username}`)

        }else{
            console.log("Faild")
            setShowSuccessMessage(false);
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
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
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



function WelcomeComponent() {
    const paramas = useParams()
    // console.log(paramas)
    console.log(paramas.username)
    const {username} = useParams()


    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage yours todos -
                {/* <a href="/todos"> go here </a> */}
                <Link to="/todos"> go here </Link>

            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>we are wotking hard!!</h1> 
            <div>
                Applogies for the 404, reach out to our at ABC
            </div>
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1> You are logged out!!</h1> 
            <div>
                Thank you are using our App. Come back soon
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="HeaderComponent">
           Header <hr />
        </div>
    )
}


function FooterComponent() {
    return (
        <div className="FooterComponent">
            <hr /> Footer
        </div>
    )
}
function ListTodosComponent(){
    const today  = new Date();

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth, today.getDay())
    const todos =[
        {id:1, description:"learn aws", done: false, targetDate: targetDate},
        {id:2, description:"learn spring", done: false, targetDate: targetDate},
        {id:3, description:"learn devops", done: false, targetDate: targetDate},
        {id:4, description:"learn python", done: false, targetDate: targetDate},
    ]

    return(
        <div className="container">
            <h1> things You want to do</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* map to use in jsx */}
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}