import React, { useEffect, useState } from 'react';

import Axios from 'axios';

const MetMuseumPage = () => {

  const [metMuseum, setMetMuseum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMetMuseumData = async () => {
        const result = await Axios('https://collectionapi.metmuseum.org/public/collection/v1/objects/436965');
        // const result2 = await Axios('https://collectionapi.metmuseum.org/public/collection/v1/objects/438815');
        
        setMetMuseum(result.data);
        // setMetMuseum(result2.data);
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
  
  const met_key = '436965';
  // const met_key2 = '438815';

  return (
    <div className='style'>
      <h2>The Metropolitan Museum of Art</h2>
      <h2>Art Picture of the Day</h2>
      {loading ? <h3>Loading...</h3> : [metMuseum].map(metMuseum => (
        <>
        <a key={met_key} href={`metMuseum/${metMuseum.id}`}>
        <img src={metMuseum.primaryImage} width='400' height='auto' /></a>
        {/* <a key={met_key2} href={`metMuseum/${metMuseum.id}`}>
        <img src={metMuseum.primaryImage} width='200' height='auto' /></a> */}
        </>
      ))}
    
    </div>
  );
}

export default MetMuseumPage;