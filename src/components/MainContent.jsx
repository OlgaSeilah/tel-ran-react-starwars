import SectionHero from "./SectionHero.jsx";
import SectionPicturesTable from "./SectionPicturesTable.jsx";
import SectionText from "./SectionText.jsx";

const MainContent = () => {

    return (
        <div>
            <main className="clearfix">
                <SectionHero/>
                <SectionPicturesTable/>
                <SectionText/>
            </main>
        </div>
    )
}

export default MainContent