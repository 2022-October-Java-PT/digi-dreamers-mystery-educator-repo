import React from "react";
import "./apiHub.css";

export default class apiHub extends React.Component{
    constructor(props) {
        super(props);
    

        this.state = {
            funFactTitle: "",
            funFactDescription: ""
        };
        this.generateFunFact = this.generateFunFact.bind(this);
    }

    generateFunFact() {
        fetch("http://localhost:8080/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                funFactTitle: data.funFactTitle,
                funFactDescription: data.funFactDescription
            });
        })
    }

    componentDidMount() {
        this.generateFunFact();
    }

    render() {
        let funFactTitle = this.state.funFactTitle;
        let funFactDescription = this.state.funFactDescription;

        return(
            <div>
                <h1 className="Text">{funFactTitle}</h1>

                <h2 className="text">{funFactDescription}</h2>

                <button onClick={this.generateFunFact}>Front Page?</button>
            </div>
        )
    }
}