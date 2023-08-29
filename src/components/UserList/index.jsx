import { useContext } from "react"
import { UserCard } from "../UserCard"
import { UsersContext } from "../../providers/UsersContext"

export const UserList = () => {
    const { userList, removeUser } = useContext(UsersContext);

    return(
        <ul>
            {userList.map(user => (
                <UserCard key={user.id} name={user.name} email={user.email} onClick={() => removeUser(user.id)} />
            ))}
        </ul>
    )
}