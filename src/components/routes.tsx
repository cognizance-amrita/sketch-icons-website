import { Route , Routes } from "react-router-dom";
import Home from "./home";
import Usage from './usage';
const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usage" element={<Usage />} />
        </Routes >
    );
}
export default routes;
