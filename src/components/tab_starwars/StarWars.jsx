import React from 'react';
import {starWarsInfo} from "../../utils/Constants.js";

const StarWars = () => {
    return (
        <div className="text-2xl text-justify">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;