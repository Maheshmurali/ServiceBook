import { createContext, useState } from "react";



export const UserContext = createContext(null)

export default function User_Context({children}){
    const [user , setUser] = useState(null)
    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    )
}