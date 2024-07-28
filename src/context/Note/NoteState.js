// Import the noteContext we created
import noteContext from "./NoteContext";
import { useState } from "react";

// Define the NoteState component
const NoteState = (props) => {
    const [width, setWidth] = useState(true);

    // function to toggle the 'width' state
    function changeWidth() {
        setWidth(!width);
    }

    // Return the context provider with 'width' and 'changeWidth' as the value
    return (
        <noteContext.Provider value={{ width, changeWidth }}>
            {props.children}
        </noteContext.Provider>
    );
}

export default NoteState;
