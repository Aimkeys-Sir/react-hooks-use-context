import React from "react";

const UserContext=React.createContext()

function userProvider({children}){
    return(<UserContext.Provider value={null}>
        {children}
    </UserContext.Provider>)
}
export {UserContext,userProvider}