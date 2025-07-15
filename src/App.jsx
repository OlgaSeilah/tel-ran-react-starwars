import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {navItems} from "./utils/Constants.js";
import {useState} from "react";
import {ProjectContext} from "./utils/Context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            <ProjectContext value={{page, setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </ProjectContext>
        </div>
    )
}

export default App
