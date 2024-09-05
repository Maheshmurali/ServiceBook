import { createContext, useState } from "react";



export const TechnicianContext = createContext(null)

export default function Technician_Context({children}){
    const [technician , setTechnician] = useState([])
    return(
        <TechnicianContext.Provider value={{technician,setTechnician}}>
            {children}
        </TechnicianContext.Provider>
    )
}