import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Auth from '../views/Auth';
import Panel from '../views/Panel';
import Guide from '../views/Guide';
import AdminPanel from '../views/AdminPanel.jsx';
import { BrowserRouter } from 'react-router-dom';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/panel" element={<Panel />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/adminPanel" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}