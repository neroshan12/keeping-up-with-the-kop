import React, { Component } from 'react';
import Squad from './Squad'
import Fixtures from './Fixtures'
import '../styles/Homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
                </div>

            </div>
        );
    }
}


export default Homepage;