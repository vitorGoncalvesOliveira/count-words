import React, { createContext, useState } from 'react'

const UserValue = {
    state: {},
    setState: () =>{},
}

const UserContext = createContext(UserValue)

const UserContextProvider = ({ children }) =>{
    const [state, setState] = useState(UserValue.state);
    return(
        <UserContext.Provider value={{state, setState}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider }
export default UserContext;