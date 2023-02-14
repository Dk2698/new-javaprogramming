import { Link, useParams } from "react-router-dom"

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

export default WelcomeComponent