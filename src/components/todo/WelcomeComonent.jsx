import axios from "axios"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { retrieveHelloWorldBeanV1, retrieveHelloWorldBeanPathVariable } from "./api/HelloWorldApiService"

function WelcomeComponent() {
    const paramas = useParams()

    const [message, setMessage] = useState(null)
    // console.log(paramas)
    console.log(paramas.username)
    const {username} = useParams()

    function callHelloWorldRestAPi(){
        console.log('called')
        // axios.get('http://localhost:9090/hello-world1')
        //     .then((response) => successFulResponse(response))    // callback use here
        //     .catch(error => errorResponse(error))
        //     .finally(() => console.log('cleanup'))


            // axios.get('http://localhost:9090/hello-world-bean')
            // .then((response) => successFulResponse(response)) 
            // .catch(error => errorResponse(error))
            // .finally(() => console.log('cleanup'))

            // retrieveHelloWorldBeanV1()
            //     .then((response) => successFulResponse(response)) 
            //     .catch(error => errorResponse(error))
            //     .finally(() => console.log('cleanup'))


            retrieveHelloWorldBeanPathVariable('Kumar')
            .then((response) => successFulResponse(response)) 
            .catch(error => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }
    function  successFulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function  errorResponse(error){
        console.log(error)
    }
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage yours todos -
                {/* <a href="/todos"> go here </a> */}
                <Link to="/todos"> go here </Link>

            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestAPi}>call hello world</button>
            </div>

            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent