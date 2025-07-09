import React from 'react';
import {starWarsInfo} from "../../utils/Constants.js";

const StarWars = () => {
    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;