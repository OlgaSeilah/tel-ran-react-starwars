import ContactForm from "./ContactForm.jsx";
import {ContactContext} from "../../utils/Context.js";

const Contact = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert("error: no api is set to the form")
    }

    return (
        <div>
            <ContactContext value={handleSubmit}>
                <ContactForm/>
            </ContactContext>
        </div>
    );
};

export default Contact;