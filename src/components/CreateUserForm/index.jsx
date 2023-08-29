import { useContext, useState } from "react";
import { UsersContext } from "../../providers/UsersContext";

export const CreateUserForm = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   const { createUser } = useContext(UsersContext);
   
   const submit = (event) => {
    event.preventDefault();
    createUser(name, email);
   }

   return (
      <form onSubmit={submit} role="form">
         <input id="name" type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
         <input id="email" type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
         <button>Cadastrar usuário</button>
      </form>
   );
};
