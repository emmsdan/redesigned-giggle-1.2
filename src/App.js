import React from 'react';
import './App.css';
import CardList from "./component/card-list/card-list.component";
import {formatUser, search} from "./utils/utils";
import Search from "./component/Search/Search.component";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      title: 'Levelling Up on ReactJs Basic (Again 2.1)',
      users: [],
      searchField: '',
      showCards: false
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=30')
        .then(response => response.json())
        .then(users => {
          this.setState({ users: formatUser(users.results), tempUsers: formatUser(users.results) })
        })
  }

  onChange (event) {
    const filtered = this.state.users.filter(item => search(event.target.value, item) );
    this.setState({ tempUsers: filtered });
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

          {this.state.showCards && <Search handOnChange={(e) => this.onChange(e)} />}
          {this.state.showCards && <CardList users={this.state.tempUsers}/>}
        </header>
      </div>
    </>;
  }
}

export default App;
