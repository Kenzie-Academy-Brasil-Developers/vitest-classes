import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../pages/HomePage"
import { WelcomePage } from "../../pages/WelcomePage"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<WelcomePage />} />
        </Routes>
    )
}