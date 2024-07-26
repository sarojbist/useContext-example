// A context can be for anything. user, card or what not
// this is step 1 ----creating a context
import React, {createContext} from "react";

const UserContext = createContext();

export default UserContext;

// context provides a provider. we'll wrap all our components with UserContext
