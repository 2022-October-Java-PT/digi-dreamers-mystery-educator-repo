import React, { useEffect, useState } from 'react';

import Axios from 'axios';

const metMuseumPage = () => {

  const [metMuseum, setMetMuseum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMetMuseumData = async () => {
        const result = await Axios('https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]');
        
        setMetMuseum(result.data);
    }

    if(metMuseum) {
      setLoading(false);
    }

    const timer = setTimeout(() => {
      !metMuseum && fetchMetMuseumData();
    }, 1000);

    return () => clearTimeout(timer);

    // fetchMetMuseum();
      
  }, [metMuseum]);
  
  
  console.log(metMuseum);

  return (
    <div className='style'>
      <h2>The Metropolitan Museum of Art</h2>
      <h2>Art Picture of the Day</h2>
      {loading ? <h3>Loading...</h3> : metMuseum.map(metMuseum => (
        <a key={metMuseum.id} href={`metMuseum/${metMuseum.id}`}><p>{metMuseum.title}</p></a>
      ))}
    
    </div>
  );
}

export default metMuseumPage;