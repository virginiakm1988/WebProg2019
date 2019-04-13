import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog'
import './style/assets/css/main.css';

class App extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<BrowserRouter>
				<div className="App">
					<Blog />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
