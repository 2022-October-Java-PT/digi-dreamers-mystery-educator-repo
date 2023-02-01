import React, { useEffect, useState } from 'react';

import Axios from 'axios';
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
    }, []);
    
  return (
    <div className='style-met'>
      <h2>The Metropolitan Museum of Art</h2>
      <h2>Artwork of the Day</h2>
      {loading ? <h3>Loading...</h3> : [metMuseum].map(metMuseum => (
        
        <p href={`metMuseum/${randomId.id}`}>
        <h3>Artist</h3>
        <p>{metMuseum.artistDisplayName}</p>
        <h3>Artist Bio</h3>
        <p>{metMuseum.artistDisplayBio}</p>
        <h3>Title</h3>
        <p>{metMuseum.title}</p>
        <h3>Medium</h3>
        <p>{metMuseum.medium}</p>
        <img src={metMuseum.primaryImage} alt="" width='700' height='auto' />
        </p>
      ))}
    
    </div>
  );
}

export default MetMuseumPage;