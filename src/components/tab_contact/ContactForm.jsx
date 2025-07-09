import React, {useEffect, useState} from 'react';
import './ContactForm.css';
import ContactFormDropdown from "./ContactFormDropdown.jsx";
import {baseUrl} from "../../utils/constants.js";

const ContactForm = ({handleSubmit}) => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/v1/planets`)
            .then(res => res.json())
            .then(data => setPlanets(data))
    }, [])

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>First Name
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </label>
                    <label htmlFor="lname">Last Name
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    </label>

                    <ContactFormDropdown planets={planets}/>

                    <label>Subject
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    </label>
                    <input id="submit-btn" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;