console.log('hoc');
//higher order component(HOC)

//A component (hoc) that render another component
//reuse code, render hijacking , prop manipulation, abstaract state = hoc advantages
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=> ( ///regular component
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

//HOC

const withAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info, please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    );//{...props} will pass withAdminWarning component props to wrapped component
};

//requireAuthentication
const requireAuthentication = (WrappedComponent)=>{//hoc
    return (props)=>(
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You are NOT Authenticated</p>}
        </div>
    );
};


const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);
// console.log(AdminInfo);


// ReactDOM.render(<AdminInfo isAdmin={false} info="This are the details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details"/>,document.getElementById('app'));