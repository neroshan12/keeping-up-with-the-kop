import React, { Component } from 'react';
import '../styles/Competitions.css'

class Competitions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.props.activeCompetitions) {
            return (
                <div className="Competitions_container">
                    <div className="Competitions_title">Competitions</div>
                    {this.props.activeCompetitions.map((competition, key) => {
                        return <div key={key} className="Competitions_name" >{competition.name}</div>
                    })
                    }
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Competitions;