import React, {Component} from 'react';

import Axios from 'axios';
import Image from './image';
import style from './style.module.scss'

class NasaGalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: []
        };
    }
    
    render() {
        let imageData = this.state.imageData.slice(0,38);
        imageData = imageData.map((hash,index) => {
            return (
                <Image
                    title={hash.title}
                    link={hash.link}
                    id={index}
                    key={index}
                />
            );
        });

        return (
            <div className={style.Nasa}>
                <div className={style.topContainer}>
                    <h1>Welcome to the Nasa Gallery</h1>
                </div>
                <section className={style.gallery}>{imageData}</section>
            </div>
        );
    }
    
    componentDidMount() {
        this.getAPIData();
    }

    getAPIData(search = 'star') {
        let array = [];
        const url = `https://images-api.nasa.gov/search?title=${search}&media_type=image`;
        Axios.get(url).then((response) => {
            let arrayOfHashes = response.data.collection.items;
            arrayOfHashes.forEach((element) => {
                array.push({
                    title: element.data[0].title,
                    link: element.links[0].href,
                    dataTaken: element.data[0].date_created
                });
            });
            this.setState({
                imageData: array
            });
        });
    }
}

export default NasaGalleryPage;
