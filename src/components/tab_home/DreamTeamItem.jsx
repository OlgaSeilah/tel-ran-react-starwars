const DreamTeamItem = ({pictureName}) => {
    let address = `src/assets/${pictureName}.jpg`;
    let styles = "w-full"

    if (pictureName === "friend7") {
        return <img className="rounded-bl-2xl" src={address} alt="Friend"/>
    } else if (pictureName === "friend9") {
        return <img className="rounded-br-2xl" src={address} alt="Friend"/>
    }

    return (
        <img className={styles} src={address} alt="Friend"/>
    );
}

export default DreamTeamItem;