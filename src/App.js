import React from 'react';


class App extends React.Component {
    
    state = { 
        peopleInSpace: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }


    render() { 
        return (
            <div>
            { this.state.peopleInSpace.map(person =>
                <ul> <li> Name: {person.name}  </li>
        
            <li> Craft: {person.craft}  </li>
            </ul> )}
            </div>
        );
    }
}



export default App ;
// create your App component here

