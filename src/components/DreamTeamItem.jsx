const DreamTeamItem = ({pictureName}) => {
    let address = `src/assets/${pictureName}.jpg`;

    if (pictureName === "friend7") {
        return <img className="bottomLeft col-sm-4 p-1" src={address} alt="Friend"/>
    } else if (pictureName === "friend9") {
        return <img className="bottomRight col-sm-4 p-1" src={address} alt="Friend"/>
    }

    return (
        <img className="col-sm-4 p-1" src={address} alt="Friend"/>
    );
}

export default DreamTeamItem;