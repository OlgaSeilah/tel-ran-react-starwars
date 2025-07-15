import {useContext} from "react";
import {ContactContext} from "../../utils/Context.js";

const ContactFormDropdown = () => {

    const {planets} = useContext(ContactContext);

    if (planets) {
        return (
            <div>
                <label className="flex flex-col">Country
                    <select className={"border rounded-lg"} id="planet" name="planet">
                        {planets.map(planet => {
                                return (
                                    <option key={planet.id} value={planet.name}>{planet.name}</option>
                                )
                            }
                        )}
                    </select>
                </label>
            </div>
        );
    } else {
        return (
            <div>
                <label className="flex flex-col">Country
                    <select className={"border rounded-lg"} id="planet" name="planet">
                        <option value="empty">Loading planets list...</option>
                    </select>
                </label>
            </div>
        )
    }


};

export default ContactFormDropdown;