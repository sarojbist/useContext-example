import React, { useState } from "react";
import UserContext from "./userContext";
// children is generic name that passes what is came
// here we create a global states that can be accessed by the any components
// usercontectProvider is a method
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        // value are data that we pass
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider;