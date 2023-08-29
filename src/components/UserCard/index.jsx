export const UserCard = ({name, email, onClick}) => {
    return(
        <li>
            <h3 data-testid="name">{name}</h3>
            <p data-testid="email">{email}</p>
            {onClick ? <button onClick={onClick}>Remover</button> : null}
        </li>
    )
}