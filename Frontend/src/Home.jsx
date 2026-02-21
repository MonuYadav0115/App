import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'


const Home = ()=>{
    let [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/data").then((res)=>{
            setData(res.data)
        })
    },[])

    return(
        <div>
        <table border={1}>
            <tr><th>Name</th><th>Place</th><th>Gender</th><th>Phone-No</th><th>DOB</th><th>E-mail</th></tr>
            {
                data.map((obj)=>{
                    return(<tr>
                        <td>{obj.name}</td>
                        <td>{obj.place}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.phoneno}</td>
                        <td>{obj.dob.slice(0,10)}</td>
                        <td>{obj._id}</td>
                    </tr>)
                })
            }
        </table>

    </div>
  )
    
}
export default Home;