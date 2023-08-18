import { createContext } from "react";

export const UsersContext = createContext({});

export const UsersProvider = ({children}) => {
    return(
        <UsersContext.Provider value={{ userList: []}}>
            {children}
        </UsersContext.Provider>
    )
}