import React from 'react';
import './App.css';
import CardList from "./component/card-list/card-list.component";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      title: 'Levelling Up on ReactJs Basic (Again 2.1)',
      users: [],
      showCards: false
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=30')
        .then(response => response.json())
        .then(users => this.setState({ users: users.results }))
  }

  render() {
    setTimeout(()=> {
      this.setState({ ...this.state, showCards: true })
    }, 4000);
    return <>
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          {!this.state.showCards && <p>please, wait loading contents </p>}
         {this.state.showCards && <CardList users={this.state.users}/>}
        </header>
      </div>
    </>;
  }
}

export default App;
