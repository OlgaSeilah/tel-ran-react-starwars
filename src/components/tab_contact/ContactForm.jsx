import React, {useContext, useEffect, useState} from 'react';
import ContactFormDropdown from "./ContactFormDropdown.jsx";
import {baseUrl} from "../../utils/Constants.js";
import {ContactContext} from "../../utils/Context.js";

const ContactForm = () => {

    const [planets, setPlanets] = useState([]);

    async function getPlanetsFromServer() {
        const res = await fetch(`${baseUrl}/v1/planets`);
        const data = await res.json();
        setPlanets(data);
        setPlanetsToLS(data);
    }

    function getPlanetNamesFromLS() {
        const dataFromLS = localStorage.getItem('planetsAndDate');
        if (!dataFromLS || dataFromLS === 'undefined') {
            return null;
        }

        return JSON.parse(dataFromLS);
    }

    function setPlanetsToLS(data) {
        const wholeData = {
            data: data,
            savedAt: Date.now(),
        }
        localStorage.setItem('planetsAndDate', JSON.stringify(wholeData));
    }

    function isPlanetListExpired(savedAt) {
        return Date.now() - savedAt > (30 * 24 * 60 * 60 * 1000);
    }


    useEffect(() => {
        const dataFromLS = getPlanetNamesFromLS();
        if (dataFromLS && !isPlanetListExpired(dataFromLS.savedAt)) {
            setPlanets(dataFromLS.data)
        } else {
            getPlanetsFromServer();
        }
    }, [])

    const handleSubmit = useContext(ContactContext);

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full text-2xl py-10">
                <form onSubmit={handleSubmit} className="flex flex-col bg-gray-color p-3">
                    <label className="flex flex-col ">First Name
                        <input className={"border rounded-lg"} type="text" id="fname" name="firstname"
                               placeholder="Your name.."/>
                    </label>
                    <label htmlFor="lname" className="flex flex-col">Last Name
                        <input className={"border rounded-lg"} type="text" id="lname" name="lastname"
                               placeholder="Your last name.."/>
                    </label>
                    <ContactContext value={{planets}}>
                        <ContactFormDropdown />
                    </ContactContext>
                    <label className="flex flex-col">Subject
                        <textarea className={"border rounded-lg"} id="subject" name="subject"
                                  placeholder="Write something.."></textarea>
                    </label>
                    <input className={'bg-red-color border-black border-2 rounded-md m-auto p-2 cursor-pointer'}
                           id="submit-btn" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;