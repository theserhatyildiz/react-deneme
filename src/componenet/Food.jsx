import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react"
import FoodData from "./FoodData";


export default function Food()
{

    // ------------------Variables------------------
    
    const loggedData = useContext(UserContext);

    const [foodItems,setFoodItems] = useState([]);

    const [food,setFood] = useState(null);


    // ------------------Functions------------------

    function searchFood(event)
    {
        if(event.target.value.length!==0)
        {

        // ------------------Calling the data to API------------------

        fetch(`http://localhost:8000/foods/${event.target.value}`, {
            method:"GET",
            headers:{
                Authorization:`Bearer ${loggedData.loggedUser.token}`
            }

        })
        .then((respone)=>respone.json())
        .then((data)=>{
            if(data.message==undefined)
            {
                setFoodItems(data);
            }
            else
            {
                setFoodItems([]);
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })

       }
       else 
       {
        setFoodItems([]);
       }

}
    return(
        <>
            <section className="container diet-container">

                <div className="search">

                    <input className="search-inp" type="search" onChange={searchFood} placeholder="Search Food" />
                    
                    {
                        foodItems.length!==0?(

                        <div className="search-results">

                        {

                            foodItems.map((item)=>{

                                return(

                                <p className="item" onClick={()=>{
                                    setFood(item)
                                }}key={item._id}>{item.NameTr}</p>
                                )     
                            })

                        }

                        </div>
                        ):null
                    }

                </div>

                {
                food!==null?(
                    <FoodData food = {food}/>
                ):null
            }

            
            </section>
        </>
    )
}