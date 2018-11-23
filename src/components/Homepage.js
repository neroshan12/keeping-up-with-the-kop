import React, { Component } from 'react';


const localStyles = {
    background: "#C8102E",
    display: "flex",
    height: "100%"
}
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squad: []
        }
    }

    componentWillMount = () => {
        fetch("https://api.football-data.org/v2/teams/64", { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTY_API_KEY } })
            .then((response) => response.json())
            .then(data => {
                this.setState({ squad: data.squad })
                console.log(this.state.squad)
            })
    }


    render() {
        return (
            <div style={localStyles}>
                hello world
            </div>
        );
    }
}


export default Homepage;