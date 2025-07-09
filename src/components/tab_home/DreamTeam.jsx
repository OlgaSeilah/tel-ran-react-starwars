import DreamTeamItem from "./DreamTeamItem.jsx";
import {dreamTeamPics, dreamTeamTitle} from "../../utils/Constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">{dreamTeamTitle}</h2>

            {dreamTeamPics.map(item => <DreamTeamItem pictureName={item} key={item}/>)}
        </section>
    );
};

export default DreamTeam;