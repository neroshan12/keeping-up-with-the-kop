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

    reverseString = (string) => {
        return string.substring(0, 10).split("-").reverse().join("-")
    }


    render() {

        return (
            <div className="Fixtures_container">
                <div className="Fixtures_title">Fixtures</div>
                {this.state.fixtures.map((match, key) => {
                    if (match.status === 'FINISHED') {
                        return <div key={key} className="Fixtures_holder_done">
                            <div className="Fixtures_game">{match.homeTeam.name} </div>
                            <div className="Fixtures_score">{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</div>
                            <div className="Fixtures_game"> {match.awayTeam.name}</div>
                            <div className="Fixtures_date"> {this.reverseString(match.utcDate)}</div>
                        </div>
                    } else {
                        return <div key={key} className="Fixtures_holder">
                            <div className="Fixtures_game">{match.homeTeam.name} </div>
                            <div className="Fixtures_score">{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</div>
                            <div className="Fixtures_game"> {match.awayTeam.name}</div>
                            <div className="Fixtures_date"> {this.reverseString(match.utcDate.substring(0, 10))}</div>
                        </div>
                    }
                })
                }
            </div>
        )
    }
}

export default Fixtures;