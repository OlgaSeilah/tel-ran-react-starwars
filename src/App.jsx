import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";

import './App.css'


function App() {

    return (
        <div className={'main'}>
            <div className={'container-fluid'}>
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        </div>


    )
}

export default App
