import React, { useEffect, useState } from "react";

import Axios from "axios";
import style from './style.met.scss';

const MetMuseumPage = () => {
    const [metMuseum, setMetMuseum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [randomId, setRandomId] = useState(null);
    useEffect(() => {
        const fetchIds = async () => {
            try {
                const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)
                const random = Math.floor(Math.random() * result.data.objectIDs.length)
                setRandomId(random)
                const response = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${random}`)
                setMetMuseum(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchIds()
        if (metMuseum) {
            setLoading(false);
        }
    }, [metMuseum]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!metMuseum || !metMuseum.primaryImageSmall) {
            window.location.reload();}
            }, 3500);
            return ()=>clearTimeout(timer);
    }, [metMuseum]);
    function refreshPage(){
        window.location.reload();
    }
    return (
        loading ? <h2>Loading...</h2> :
            <div className='style-met'>
                <h2>The Metropolitan Museum of Art</h2>
                <button className='style-metMuseum' onClick={refreshPage }>New Mystery Art</button>
                <h2 className={style.artTitle}>Title: {metMuseum.title}</h2>
                <img className='style-image' src={metMuseum.primaryImage} alt='' width='700' height='auto' />
                <h2 className={style.artArtist}>Artist: {metMuseum.artistDisplayName}</h2>
                
            </div>
    );
}
export default MetMuseumPage;