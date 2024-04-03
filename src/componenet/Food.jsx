import { UserContext } from "../context/UserContext";
import { useContext } from "react"
import Header from "./Header"

export default function Food()
{

    // ------------------Variables------------------
    
    const loggedData = useContext(UserContext);



    // ------------------Functions------------------

    function searchFood(event)
    {
        console.log(event.target.value)

        // ------------------Calling the data to API------------------

        fetch(`http://localhost:8000/foods/${event.target.value}`, {
            method:"GET",
            headers:{
                Authorization:`Bearer: ${loggedData.loggedUser.token}`
            }

        })
        .then((respone)=>respone.json())
        .then((data)=>{
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }


    return(
        <>
            <section className="container diet-container">

                <div className="search">

                    <input className="search-inp" type="search" onChange={searchFood} placeholder="Search Food" />

                </div>

            </section>
        </>
    )
}