import React from 'react';
import { appService } from 'Services/appService';
import { Component } from 'Components/Component';
import { Container } from 'Containers/Container';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.data = appService.getData()
	}

	render() {
		return (
			<div>
				<h1>React Webpack Starterkit</h1>
				<Component data={this.data}></Component>
				<Container></Container>
			</div>
		)
	}
}
