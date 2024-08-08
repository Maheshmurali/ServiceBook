import { useState,createContext } from "react";
 

export const ComplaintContext = createContext(null)

function Complaint({children}){
    const [complaint , setComplaint] = useState([])
    return(
        <ComplaintContext.Provider value={{complaint,setComplaint}}>
            {children}
        </ComplaintContext.Provider>
        
    )
    
}

export default Complaint