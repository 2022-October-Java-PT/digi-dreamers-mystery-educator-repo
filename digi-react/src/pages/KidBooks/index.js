import React, {useEffect, useState} from 'react';

import  Axios  from 'axios';

const KidBooksPage = () => {
    
    
    const [kidBooks, setKidBooks] = useState(null);
    const [loading, setLoading] = useState(true);

    // const [addKidBooks, setAddKidBook] = useState({
    //     title: ""
    // });

    useEffect(() => {
        
        const fetchKidBooksData = async () => {
            const result = await Axios('http://localhost:8080/api/kidbooks');
            setKidBooks(result.data);
        }

        if(kidBooks) {
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !kidBooks && fetchKidBooksData();
        }, 1000);

        return () => clearTimeout(timer);
    }, [kidBooks]);
    // eslint-disable-next-line
    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     setAddKidBook({
    //         ...addKidBooks,
    //         [event.target.name] : value
    //     });
    // }
// eslint-disable-next-line
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const userData = {
    //         title: addKidBooks.title
    //     }

    //     Axios.post(`http://localhost:8080/api/kidbooks/add-kidbooks`, userData).then((response) => {
    //         console.log(response.status);
    //         console.log(response.data);
    //         setAddKidBook(response.data);
    //     });
    // }

    return (
        <div>
            <h2>Here are some Books we recommend!</h2>
            {loading ? <h3>Loading...</h3> : kidBooks.map(kidBook => (
                <div>
                <h3>Authors</h3>
                <p>{kidBook.firstName}</p>
                {kidBooks.authors?.map(author => (
                <p>{author.firstName} {author.lastName}</p>
            ))}
                <h3>Title</h3>
                <p>{kidBook.title}</p>
                <h3>Description</h3>
                <article>{kidBook.description}</article>
                
                </div>
            ))}
            
        </div>
    )
}

export default KidBooksPage;