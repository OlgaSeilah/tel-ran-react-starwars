const ContactFormDropdown = ({planets}) => {
    return (
        <div>
            <label>Country
                <select id="planet" name="planet">
                    {planets.map(planet => {
                        return (
                            <option key={planet.id} value={planet.name}>{planet.name}</option>
                        )}
                    )}
                </select>
            </label>
        </div>
    );
};

export default ContactFormDropdown;