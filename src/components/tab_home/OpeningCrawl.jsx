import {useEffect, useState} from "react";
import {baseUrl} from "../../utils/Constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const openingCrawl = sessionStorage.getItem("openingCrawl");
        if (openingCrawl) {
            setOpeningCrawl(openingCrawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;

            fetch(`${baseUrl}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('openingCrawl', data.opening_crawl);
                });
        }

    }, []);

    if (openingCrawl) {
        return (
            <p className="farGalaxy">{openingCrawl}</p>
        );
    } else {
        return (
            <p className={'farGalaxy'}>
                <span className="spinner-border spinner-border-sm"></span>
                Loading...
            </p>
        );
    }
};

export default OpeningCrawl;