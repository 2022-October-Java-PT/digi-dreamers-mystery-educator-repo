import React, { useEffect, useState } from 'react';

import Axios from 'axios';

const MetMuseumPage = () => {

  const [metMuseum, setMetMuseum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMetMuseumData = async () => {
        const result = await Axios('https://collectionapi.metmuseum.org/public/collection/v1/objects/436532');
        
        setMetMuseum(result.data);
    }

    if(metMuseum) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !metMuseum && fetchMetMuseumData();
    }, 1000);

    return () => clearTimeout(timer);
      
  }, [metMuseum]);
  
  const met_key = '436532';

  return (
    <div className='style'>
      <h2>The Metropolitan Museum of Art</h2>
      <h2>Artwork of the Day</h2>
      {loading ? <h3>Loading...</h3> : [metMuseum].map(metMuseum => (
        
        <p key={met_key} href={`metMuseum/${metMuseum.id}`}>
        <h3>Artist</h3>
        <p>{metMuseum.artistDisplayName}</p>
        <h3>Artist Bio</h3>
        <p>{metMuseum.artistDisplayBio}</p>
        <h3>Title</h3>
        <p>{metMuseum.title}</p>
        <h3>Medium</h3>
        <p>{metMuseum.medium}</p>
        <img src={metMuseum.primaryImage} alt="" width='900' height='auto' />
        </p>
      ))}
    
    </div>
  );
}

export default MetMuseumPage;