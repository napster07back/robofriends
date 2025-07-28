import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";
// import { robots } from './robots';
import '../containers/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    return !robots.length ?
      <h1 className="tc f1">Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </div>
      )
  }
}

export default App;