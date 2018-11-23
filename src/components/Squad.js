import React, { Component } from 'react';
import '../styles/Squad.css'

class Squad extends Component {
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
                // console.log(this.state.squad)
            })
    }


    render() {
        return (
            <div className="Squad_container">
                <div className="Squad_title">SQUAD</div>
                {this.state.squad.map((player) => {
                    return <div className="Squad_player">{player.name}</div>
                })
                }
            </div>
        )
    }
}

export default Squad;