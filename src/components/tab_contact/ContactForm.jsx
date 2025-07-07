import React, {useEffect, useState} from 'react';
import './ContactForm.css';
import ContactFormDropdown from "./ContactFormDropdown.jsx";
import {baseUrl} from "../../utils/constants.js";

const ContactForm = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/v1/planets`)
            .then(res => res.json())
            .then(data => setPlanets(data))
    }, [])

    if (!planets) {
        return (
            <div>
                <div className="container">
                    <form>
                        <label>First Name
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        </label>
                        <label htmlFor="lname">Last Name
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        </label>
                        <label>Subject
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="container">
                    <form>
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
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
};

export default ContactForm;