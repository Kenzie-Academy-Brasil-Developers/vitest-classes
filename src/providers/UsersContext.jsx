import { createContext } from "react";

export const UsersContext = createContext({});

export const UserProvider = ({children}) => {
    return(
        <UsersContext.Provider value={{ userList: []}}>

        </UsersContext.Provider>
    )
}