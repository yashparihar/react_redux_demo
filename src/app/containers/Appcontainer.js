import React from 'react';

import {CookieMap} from './../utility/cookieLib.js';

const cookie = new CookieMap();

//CONNECT REDUX WITH REACT APP WHICH DISPATCHING STATE AND ACTION TO PROPS
import {connect} from 'react-redux';

//IMPORT ACTION
import {checkLogin, logout} from '../action/loginAction';
import {updateProfile} from '../action/userAction';

//IMPORTING REACT ROUTER DEPENDENCY
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';

//All Components
// COMPONENTS : HEADER , HOME , USER,  ABOUT , FOOTER
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {About} from '../components/about';
import {Home} from '../components/home';
import {Login} from '../components/login';
import {User} from '../components/user';

class App extends React.Component {

    constructor() {
        super();
    }

    userBasicPageStructure(page) {
        return (
            <div>
                <Header user={this.props.user} logout={this.props.logout}/>
                {page}
                <Footer/>
            </div>
        );
    }

    // LIFE CYCLE ...

    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component did Mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update ", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update ", nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("component did update ", nextProps, nextState);
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    // END LIFE CYCLE...

    checkForAuth() {
        if (cookie.getCookie("auth"))
            return true
        else
            return false
    }

    render() {
        return (
            <div>
                <Router>
                    <div>

                        <Route exact path="/" render={() => (
                            /* this.userBasicPageStructure(<Home/>) */
                            /* this.props.login.login_status ? this.userBasicPageStructure(<Home/>) :
                                 <Redirect to="/login"/>  */
                            this.checkForAuth() ? this.userBasicPageStructure(<Home/>) :
                                <Redirect to="/login"/>
                        )}/>

                        <Route path="/home" render={() => (
                            /* this.userBasicPageStructure(<Home/>) */
                            this.checkForAuth() ? this.userBasicPageStructure(<Home/>) :
                                <Redirect to="/login"/>
                        )}/>

                        <Route path="/about" render={() => (
                            /* this.userBasicPageStructure(<About/>) */
                            this.checkForAuth() ? this.userBasicPageStructure(<About/>) :
                                <Redirect to="/login"/>
                        )}/>

                        <Route path="/user" render={() => (
                            /* this.userBasicPageStructure(<User/>) */
                            this.checkForAuth() ? this.userBasicPageStructure(<User/>) :
                                <Redirect to="/login"/>
                        )}/>

                        <Route path="/login" render={() => (
                            <div>
                                <Login loginCheck={this.props.login_check} loginStatus={this.props.login.login_status}/>
                            </div>
                        )}/>

                    </div>
                </Router>
            </div>
        );
    }
}

//GETS STATES PASSED FROM PROVIDER
//STATE PASSED FROM REDUX AS WE WRAP THIS COMP AROUNF PROVIDER
const mapStateToProps = (state) => {
    return {
        user: state.user,
        login: state.login
    }
}
//THIS POPULATED IN THE COMPONENTS PROPS

//DISPATCH ACTION
const mapDispatchToProps = (dispatch) => {
    return {
        login_check: (username, password) => {
            dispatch(checkLogin(username, password));
        },
        logout: () => {
            dispatch(logout());
        },
        Profile_update: (payload_detail) => {
            dispatch(updateProfile(payload_detail));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

//CONNECT BOTH PROPS AND DISPATCH ACTION
