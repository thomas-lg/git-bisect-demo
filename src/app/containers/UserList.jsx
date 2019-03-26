import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'modules/user/selectors';
import PropTypes from 'prop-types';
import * as usersAction from 'modules/user/thunks';
import { bindActionCreators } from 'redux';

class UserList extends React.Component {
	render() {
		const { users } = this.props;
		return (
			<div>
				{users.map(u => (
					<p key={u.id}>{u.email || u.login}</p>
				))}
			</div>
		);
	}

	componentDidMount() {
		this.props.actions.loadUsers();
	}
}

const mapStateToProps = state => {
	return {
		users: getUsers(state)
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(usersAction, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);

UserList.propTypes = {
	users: PropTypes.array,
	actions: PropTypes.object
};
