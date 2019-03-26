import React from 'react';
import { Component } from 'components/Component';
import UserList from 'containers/UserList';

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>React Webpack Starterkit</h1>
				<Component />
				<UserList />
			</div>
		);
	}
}
