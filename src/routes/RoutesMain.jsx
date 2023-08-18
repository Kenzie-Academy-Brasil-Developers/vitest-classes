import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { WelcomePage } from "../../pages/WelcomePage";
import { UsersProvider } from "../providers/UsersContext";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <UsersProvider>
                  <HomePage />
               </UsersProvider>
            }
         />
         <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
   );
};
