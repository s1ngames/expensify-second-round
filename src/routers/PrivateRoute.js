import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from'../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component ={(props) => (
        isAuthenticated ? (
            <div>
            <Header/>
            <Component {...props} />
            </div>
        ) : (
            <Redirect to ="/"/>
        )
    )}/>
);


const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
});//!! will do undefined to false, and true to true

export default connect(mapStateToProps)(PrivateRoute);

//destructure the props, doing component:Component because we cant use big C in key values inside route,
//..rest is rest of the props .(path, exact etc..)