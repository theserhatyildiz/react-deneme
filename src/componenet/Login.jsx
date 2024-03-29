import { Link } from "react-router-dom"

export default function Login()
{
    return(
        
        <section className="container">

            <form className="form">


                <h1>Login</h1>

                <input className="inp" type="email" placeholder="Enter Email" name="email"></input>
                <input className="inp" type="password" placeholder="Enter Password" name="password"></input>

                <button className="btn">Login</button>

                <p>Don't an account? <Link to="/register">Register</Link></p>

            </form>

        </section>
    )
}