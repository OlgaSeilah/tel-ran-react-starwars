import ContactForm from "./ContactForm.jsx";

const Contact = () => {

    function handleSubmit(e) {
        e.preventDefault();
        alert("error: no api is set ro the form")
    }

    return (
        <div>
            <ContactForm handleSubmit={handleSubmit}/>
        </div>
    );
};

export default Contact;