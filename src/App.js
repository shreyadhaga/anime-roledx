import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      anime: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ anime: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { anime, searchField } = this.state; //Destructuring
    const filteredAnime = anime.filter(anime =>
      anime.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Halloween Kittens</h1>
        <SearchBox placeholder="Search" handleChange={this.handleChange} />
        <CardList anime={filteredAnime} />
      </div>
    );
  }
}

export default App;
