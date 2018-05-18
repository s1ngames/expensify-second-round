import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component ={(props) => (
        isAuthenticated ? (
            <Redirect to ="/dashboard"/>
        ) : (
            <Component {...props} />
        )
    )}/>
);


const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
});//!! will do undefined to false, and true to true

export default connect(mapStateToProps)(PublicRoute);

//destructure the props, doing component:Component because we cant use big C in key values inside route,
//..rest is rest of the props .(path, exact etc..)

//publicroute used for not showing to logged in user the login page for example
//so public route (or part of them) will only be visible to not logged in useres