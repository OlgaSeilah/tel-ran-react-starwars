const DreamTeamItem = ({pictureName}) => {
    let address = `src/assets/${pictureName}.jpg`;

    let pictures = (
            <>
                <img className="col-sm-4 p-1" src={address} alt="Friend"/>
            </>
        )
    ;

    return pictures;
}

export default DreamTeamItem;