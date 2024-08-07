import { createContext,useState } from "react";

export const AdminPageContext = createContext(null)

function Pages ({children}){
    const [page,setPage] = useState('')
    return(
        <AdminPageContext.Provider value={{page, setPage}}>
                {children}
        </AdminPageContext.Provider>
    )
}

export default Pages