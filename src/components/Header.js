import {NavLink } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout : ()=> dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);
//connect(giving accses to state , )(component to connect)