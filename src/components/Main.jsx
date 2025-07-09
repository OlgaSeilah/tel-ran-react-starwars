import AboutMe from "./tab_aboutme/AboutMe.jsx";
import StarWars from "./tab_starwars/StarWars.jsx";
import Contact from "./tab_contact/Contact.jsx";
import {navItems} from "../utils/Constants.js";
import Home from "./tab_home/Home.jsx";

const Main = ({page}) => {
    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
};

export default Main;