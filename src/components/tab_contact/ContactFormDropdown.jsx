const ContactFormDropdown = ({planets}) => {

    if (planets) {
        return (
            <div>
                <label>Country
                    <select id="planet" name="planet">
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
                <label>Country
                    <select id="planet" name="planet">
                        <option value="empty">Loading planets list...</option>
                    </select>
                </label>
            </div>
        )
    }


};

export default ContactFormDropdown;