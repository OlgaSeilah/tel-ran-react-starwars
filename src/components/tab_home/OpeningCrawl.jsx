import {useEffect, useState} from "react";
import {baseUrl} from "../../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${baseUrl}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
    }, []);

    if (openingCrawl) {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    } else {
        return (<>
                <p className="farGalaxy">{openingCrawl}</p>
                <div className="spinner-border text-muted">Loading...</div>
            </>
        );
    }
};

export default OpeningCrawl;