import DreamTeamItem from "./DreamTeamItem.jsx";
import {dreamTeamPics, dreamTeamTitle} from "../../utils/Constants.js";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border rounded-b-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">{dreamTeamTitle}</h2>

            {dreamTeamPics.map(item => <DreamTeamItem pictureName={item} key={item}/>)}
        </section>
    );
};

export default DreamTeam;