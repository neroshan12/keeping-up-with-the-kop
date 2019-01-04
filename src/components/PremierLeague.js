import React, { Component } from 'react';
import '../styles/PremierLeague.css'

class PremierLeague extends Component {
    constructor(props) {
        super(props);
        this.state = {
            league: []
        }
    }

    componentDidMount = () => {
        fetch("https://api.football-data.org/v2/competitions/2021/standings", { headers: { "X-Auth-Token": process.env.REACT_APP_FOOTY_API_KEY } })
            .then((response) => response.json())
            .then(data => {
                this.setState({ league: data.standings[0].table })
                console.log("look here-----", this.state.league)

            })
    }

    render() {
        if (this.state.league === []) {
            return (
                <div></div>
            )
        } else {

            return (

                <div className="PremierLeague_container">
                    <div className="PremierLeague_title">PremierLeague</div>
                    {this.state.league.map((league, key) => {
                        // return <div key={key} className="PremierLeague_name" >{competition.name}</div>
                        console.log("look at this 3===", league)
                        return (
                            <div key={key} className="PremierLeague_box" >
                                <div>{league.position}</div>
                                <div className="PremierLeague_name">{league.team.name}</div>
                                <div>{league.playedGames} GP</div>
                                <div>{league.points}pts</div>
                                <div>{league.goalDifference} GD</div>

                            </div>
                        )
                    })
                    }
                </div>
            )
        }


    }

}


export default PremierLeague;