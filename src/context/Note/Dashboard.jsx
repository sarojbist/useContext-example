import { useContext } from "react";
import noteContext from "./NoteContext";

// what I want is. When I click on button width should be changed.
const Dashboard = () => {
    // Use the useContext hook to get the context values
    const a = useContext(noteContext);
    console.log(a.width)
    return (
        <>
            <button onClick={() => a.changeWidth()}>Click Me to change width </button>

            <div className="w-[100vw] h-[90vh] flex">
                <div className={`bg-red-500 h-[100%] ${a.width ? "w-[50%]" : "w-[80%]"}`}>

                </div>

                <div className="bg-amber-300 h-[100%] flex-1">

                </div>
            </div>
        </>
    )
}

export default Dashboard;