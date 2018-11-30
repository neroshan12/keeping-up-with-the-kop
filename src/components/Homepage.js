import React, { Component } from 'react';
import Squad from './Squad'
import Fixtures from './Fixtures'
import Competitions from './Competitions'
import News from './News'
import '../styles/Homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squad: []
        }
    }

    componentDidMount = () => {
        fetch("https://api.football-data.org/v2/teams/64", { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTY_API_KEY } })
            .then((response) => response.json())
            .then(data => {
                this.setState({ squad: data })
            })
    }

    render() {
        return (
            <div className="Homepage_container">
                <div className="Homepage_title">
                    <div className="Homepage_text">
                        Keeping up with The Kop
                </div>
                </div>
                <div className="Homepage_content">
                    <Squad />
                    <Fixtures />
                    <Competitions
                        activeCompetitions={this.state.squad.activeCompetitions}
                    />
                </div>
                <News />
            </div>
        );
    }
}


export default Homepage;