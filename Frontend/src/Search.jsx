import axios from 'axios'
import { useState } from 'react'

const Search = () => {
    let [id,setId]=useState("")
    let [obj,setObj]=useState("")
    let search=()=>{
        axios.get(`http://localhost:5000/search/${id}`).then((res)=>{
            setObj(res.data)
            setId("")
        })

    }
  return (
    <div>
        {obj==null&&<h2 style={{"color":"red"}}>Check email</h2>}
        <input type='text' placeholder='Enter Email-id' onChange={(e)=>setId(e.target.value)} value={id}/>
        <button onClick={search}>Search</button>

        {
            obj!=null&&obj!=""&&<div>
                <p>Name:{obj.name}</p>
                <p>E-mail:{obj._id}</p>
                <p>Phno:{obj.phoneno}</p>
                <p>Place:{obj.place}</p>
                </div>
        }

    </div>
  )
}

export default Search 