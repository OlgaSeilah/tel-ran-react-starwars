import {useEffect, useState} from "react";
import {baseUrl} from "../utils/constants.js";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();// можно сюда в стейт добавить
    //спиннер-лоадер, тк штука по дефолту отобр-ся, пока элемент еще не прогрузился.
    // придумать вариант, как отображать. напр, w3schools

    useEffect(() => {// useEffect решает 3 задачи. срабатывает при монтировании комп-та.
        // призван срабат-ть при каждом апдейте компонента (ререндер), сделать что-то при "размонтировании" компонента.
        // напр, при переключ на дру вкладку на нашем сайте.
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${baseUrl}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
        return () => console.log('OpeningCrawl was unmounted');
    }, []); // если массив пустой, то эфф-т сраб-т только 1 раз - при монтир-ии компон-та.
    // если указать еще какие-то переменные,
    // то комп-т будет следить за изменением этих переменных

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