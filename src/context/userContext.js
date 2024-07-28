// A context can be for anything. user, card or what not
// this is step 1 ----creating a context
import React, {createContext, useContext} from "react";

// const UserContext = createContext();
// export default UserContext;
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext)
}

// context provides a provider. we'll wrap all our components with UserContext
