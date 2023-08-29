import { createContext, useState } from "react";

export const UsersContext = createContext({});

export const UserProvider = ({children}) => {
    const [userList, setUserList] = useState([]);

    const createUser = (name, email) => {
        const newUser = { name, email, id: crypto.randomUUID() };
        setUserList([...userList, newUser]);
    }

    return(
        <UsersContext.Provider value={{ userList, createUser }}>
            {children}
        </UsersContext.Provider>
    )
}