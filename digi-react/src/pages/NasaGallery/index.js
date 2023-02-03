import React, {Component} from 'react';

import Axios from 'axios';
import Image from './image';
import SearchBox from './Searchbox';
import style from './style.module.scss'

class NasaGalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: []
        };

        this.newPictures = this.newPictures.bind(this);
    }

    componentDidMount() {
        this.newPictures();
    }

    newPictures(search = 'star') {
        let array = [];
        const url = `https://images-api.nasa.gov/search?title=${search}&media_type=image`;
        Axios.get(url).then((response) => {
            let arrayOfHashes = response.data.collection.items;
            arrayOfHashes.forEach((element) => {
                array.push({
                    title: element.data[0].title,
                    link: element.links[0].href,
                    description: element.data[0].description,
                });
            });
            this.setState({
                imageData: array
            });
        });
    }

    render() {
        let imageData = this.state.imageData.slice(0,20);
        imageData = imageData.map((hash,index) => {
            return (
                <Image
                    title={hash.title}
                    link={hash.link}
                    description={hash.description}
                    id={index}
                    key={index}
                />
            );
        });

        return (
            <div id="top" className={style.Nasa}>
                <div className={style.topContainer}>
                    <h1>Welcome to the Nasa Gallery</h1>
                    <SearchBox suggestedImages={this.suggestedImages} />
                </div>
                <section className={style.gallery}>{imageData}</section>
                <a className={style.anchor} href="#top" >Go back to Top</a>
            </div>
        );
    }

    suggestedImages = (input) => {
		this.newPictures(input);
	};

	filterByName = () => {
		let arrayOfHashes = this.state.imageData;
		arrayOfHashes.sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			} else if (a.title > b.title) {
				return 1;
			} else {
				return 0;
			}
		});
		this.setState({
			imageData: arrayOfHashes
		});
	};

	filterByDateOld = () => {
		let arrayOfHashes = this.state.imageData;
		arrayOfHashes.sort((a, b) => {
			if (a.dateTaken < b.dateTaken) {
				return -1;
			} else if (a.dateTaken > b.dateTaken) {
				return 1;
			} else {
				return 0;
			}
		});
		this.setState({
			imageData: arrayOfHashes
		});
	};

	filterByDateNew = () => {
		let arrayOfHashes = this.state.imageData;
		arrayOfHashes.sort((a, b) => {
			if (a.dateTaken > b.dateTaken) {
				return -1;
			} else if (a.dateTaken < b.dateTaken) {
				return 1;
			} else {
				return 0;
			}
		});
		this.setState({
			imageData: arrayOfHashes
		});
	};
}

export default NasaGalleryPage;