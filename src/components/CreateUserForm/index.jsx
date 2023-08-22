import { useContext } from "react";
import { UsersContext } from "../../providers/UsersContext";

export const CreateUserForm = () => {
   const { createUser } = useContext(UsersContext);
   
   const submit = (event) => {
    event.preventDefault();
    createUser();
   }

   return (
      <form onSubmit={submit} role="form">
         <input type="text" placeholder="Nome" />
         <input type="text" placeholder="E-mail" />
         <button>Cadastrar usuário</button>
      </form>
   );
};
