import React, { Component } from 'react';
import '../styles/Fixtures.css'

class Fixtures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixtures: []

        }
    }

    componentWillMount = () => {
        fetch("https://api.football-data.org/v2/teams/64/matches", { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTY_API_KEY } })
            .then((response) => response.json())
            .then(data => {
                this.setState({ fixtures: data.matches })
                console.log(this.state.fixtures)
            })
    }


    render() {
        return (
            <div className="Fixtures_container">
                <div className="Fixtures_title">Fixtures</div>
                {this.state.fixtures.map((match) => {
                    return <div className="Fixtures_holder">
                        <div className="Fixtures_player">{match.homeTeam.name}</div>
                        <div className="Fixtures_player">vs {match.awayTeam.name}</div>
                    </div>
                })
                }
            </div>
        )
    }
}

export default Fixtures;