import React, {
    Component
} from 'react';


const localStyles = {
    background: "#C8102E",
    display: "flex",
    height: "100%"
}
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount = () => {
        fetch('https://api.football-data.org/v1/competitions')
            .then((response) => response.json())
            .then(data => {
                console.log(data)
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