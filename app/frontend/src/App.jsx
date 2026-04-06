import Routers from "./routes/Routers";

export default function App() {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        document.body.classList.toggle(selectedTheme);
    } else {
        document.body.classList.add('lightMode');
    }
    return (<Routers />);
}
