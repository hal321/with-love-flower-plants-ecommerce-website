import { useState, useContext, useEffect } from "react";
import { AppContext } from "./Context";
import {  useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"
import UserHome from "./users/UserHome";

function Access(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  let { isAdmin, isLogged } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(/* "http://localhost:3001" */ + "/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          setErr("wrong password or username");
          throw Error("go to hell")
        }
        return res.json();
      })
      .then((data) => {
        isLogged(data.checkUser);
        navigate("/Admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='mainNav'>
      <form onSubmit={handleSubmit} className='container-login' style={{width:"auto"}}>
        <label htmlFor="username">User Name:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {err && <p> {err} </p>}
       
        <br /> <br />
        <button> Login </button>
        {/* <Button variant="secondary"> Login </Button> */}
      </form>
    </div>
  );
}

export default Access;
