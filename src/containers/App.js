import React, { Fragment, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		const title = 'RoboFriends'
			.split('')
			.reduce(
				(accum, char) => `${accum.toUpperCase()} ${char.toUpperCase()}`,
				''
			);
		return (
			<div className='tc'>
				<h1 className='f1 scifi'>{title}</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} id={this.state.searchField} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;
