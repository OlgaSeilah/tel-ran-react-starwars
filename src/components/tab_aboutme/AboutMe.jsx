import {useEffect, useState} from "react";
import {baseUrl} from "../../utils/Constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        fetch((`${baseUrl}/v1/peoples/1`))
            .then(res => res.json())
            .then(data => {
                setAboutMe({
                    name: data.name,
                    homeworld: data.homeworld,
                    birth_year: data.birth_year,
                    image: data.image
                })
            })
            .catch(err => console.log(err));
    }, [])

    if (aboutMe) {
        return (
            <div className="aboutMe">
                <span>Name: {aboutMe.name}</span>
                <span>Homeworld: {aboutMe.homeworld}</span>
                <span>Birth year: {aboutMe.birth_year}</span>
            </div>
        );
    } else {
        return (
            <div className="aboutMe">
                <span>Name: Loading data...</span>
                <span>Homeworld: Loading data...</span>
                <span>Birth year: Loading data...</span>
            </div>
        );
    }
};

export default AboutMe;