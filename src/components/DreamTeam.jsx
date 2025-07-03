
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";
import DreamTeamItem from "./DreamTeamItem.jsx";
import {dreamTeamPics} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>

            {dreamTeamPics.map(item => <DreamTeamItem pictureName={item} key={item}/>)}

            <img className="bottomLeft col-sm-4 p-1" src={friend7} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend8} alt="Friend"/>
            <img className="bottomRight col-sm-4 p-1" src={friend9} alt="Friend"/>
        </section>
    );
};

export default DreamTeam;