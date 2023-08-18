import { UserList } from "./components/UserList";
import { UserProvider } from "./providers/UsersContext";

function App() {
   return (
      <>
         <h1>Meu primeiro app com Vitest</h1>
         <UserProvider>
            <UserList />
         </UserProvider>
      </>
   );
}

export default App;
