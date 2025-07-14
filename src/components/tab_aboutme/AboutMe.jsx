import {useEffect, useState} from "react";
import {baseUrl} from "../../utils/Constants.js";

const AboutMe = () => {
        const [aboutMe, setAboutMe] = useState(null);

        useEffect(() => {

            const nameLS = localStorage.getItem('name');
            const homeworldLS = localStorage.getItem('homeworld');
            const bYLS = localStorage.getItem('birth_year');
            const savedAt = Number(localStorage.getItem('savedAt'));
            const isExpired = Date.now() - savedAt > (30 * 24 * 60 * 60 * 1000);


            if (nameLS && homeworldLS && bYLS && !isExpired) {
                setAboutMe({
                    name: nameLS,
                    homeworld: homeworldLS,
                    birth_year: bYLS,
                })
            } else {
                fetch(`${baseUrl}/v1/peoples/1`)
                    .then(res => res.json())
                    .then(data => {
                        setAboutMe({
                            name: data.name,
                            homeworld: data.homeworld,
                            birth_year: data.birth_year,
                        })
                        localStorage.setItem('name', data.name);
                        localStorage.setItem('homeworld', data.homeworld);
                        localStorage.setItem('birth_year', data.birth_year);
                        localStorage.setItem('savedAt', Date.now());
                    })
                    .catch(err => console.log(err));
            }

        }, [])

        if (aboutMe) {
            return (
                <div className="flex flex-col text-3xl py-1">
                    <span>Name: {aboutMe.name}</span>
                    <span>Homeworld: {aboutMe.homeworld}</span>
                    <span>Birth year: {aboutMe.birth_year}</span>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col text-3xl py-1">
                    <span>Name: Loading data...</span>
                    <span>Homeworld: Loading data...</span>
                    <span>Birth year: Loading data...</span>
                </div>
            );
        }
    }
;

export default AboutMe;