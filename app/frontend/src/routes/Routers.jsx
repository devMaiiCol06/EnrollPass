import { Routes, Route } from "react-router-dom";
import Home from "../interfaces/Home";
import Auth from "../interfaces/Auth";
import GuardianPanel from "../interfaces/GuardianPanel";
import Guide from "../interfaces/Guide";
import AdminPanel from "../interfaces/AdminPanel";
import { BrowserRouter } from "react-router-dom";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/guardianPanel" element={<GuardianPanel />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/adminPanel" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}
