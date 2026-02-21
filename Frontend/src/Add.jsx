import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {

  const [data, setData] = useState({
    _id: "",
    name: "",
    place: "",
    gender: "",
    phoneno: "",
    dob: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/add", data);
      setMessage(res.data.Message);

      if (res.data.Message === "Data Added") {
        navigate("/");
      }
    } catch (error) {
      setMessage("Error in Adding Details");
    }
  };

  return (
    <div className="form">

      <h2 style={{ color: "red" }}>{message}</h2>

      <input
        type="text"
        placeholder="Enter Email ID"
        name="_id"
        value={data._id}
        onChange={fun}
      />

      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={data.name}
        onChange={fun}
      />

      <input
        type="text"
        placeholder="Enter Phone No"
        name="phoneno"
        value={data.phoneno}
        onChange={fun}
      />

      <input
        type="date"
        name="dob"
        value={data.dob}
        onChange={fun}
      />

      <select
        name="place"
        value={data.place}
        onChange={fun}
      >
        <option value="">---Select Place---</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <div>
        <input
          type="radio"
          value="Male"
          name="gender"
          checked={data.gender === "Male"}
          onChange={fun}
        /> Male

        <input
          type="radio" 
          value="Female"
          name="gender"
          checked={data.gender === "Female"}
          onChange={fun}
        /> Female
      </div>

      <button onClick={addData}>Add</button>

    </div>
  );
};

export default Add;