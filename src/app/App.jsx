import React from 'react';
import { hot } from 'react-hot-loader'
import { appService } from 'Services/appService';
import { Component } from 'Components/Component';
import { Container } from 'Containers/Container';
import style from 'Assets/scss/styles.scss'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.data = appService.getData()
	}

	render() {
		return (
			<div>
				<h1 className={style.i}>React Webpack Starterkit</h1>
				<Component data={this.data}></Component>
				<Container></Container>
			</div>
		)
	}
}
export default hot(module)(App)
