// how data can be sent
import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

// how to fetch values under UserContext
function Login() {
    const [userName, setUserName] = useState("");
    const { setUser } = useContext(UserContext);
    function handleSubmit() {
        // e.preventDefault();
        setUser({ userName });
    }
    return (
        <>
            <div>Enter your name</div>
            <input
                type="text"
                placeholder="user name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Login;