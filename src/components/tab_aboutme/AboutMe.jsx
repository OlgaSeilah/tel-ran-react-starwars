import {useEffect, useState} from "react";
import {baseUrl} from "../../utils/constants.js";

const AboutMe = () => {

    const [aboutMe, setAboutMe] = useState({});

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

    return (
        <div className="aboutMe">
            <span>Name: {aboutMe.name}</span>
            <span>Homeworld: {aboutMe.homeworld}</span>
            <span>Birth year: {aboutMe.birth_year}</span>
        </div>
    );
};

export default AboutMe;