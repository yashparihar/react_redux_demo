import React from "react";
import {NavLink} from 'react-router-dom' ;

import {CookieMap} from './../utility/cookieLib.js';

const cookie = new CookieMap();

/*
export default class Header extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeStyle={{color:'green'}}>Home </NavLink>
                            <NavLink to="/user" activeStyle={{color:'green'}}>User </NavLink>
                            <NavLink to="/profile" activeStyle={{color:'green'}}>Profile </NavLink>
                            <NavLink to="/about" activeStyle={{color:'green'}}>about </NavLink>

                            <button value="login" onClick={this.loggedInMethod.bind(this)}>
                                {this.state.loggedIn ? "Log Out" : "Log In" }
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )};
}
*/

export const Header = (props) => {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/" exact activeStyle={{color: 'green'}}>Home </NavLink>
                        <NavLink to="/user" activeStyle={{color: 'green'}}>User </NavLink>
                        {/*<NavLink to="/profile" activeStyle={{color: 'green'}}>Profile </NavLink>*/}
                        <NavLink to="/about" activeStyle={{color: 'green'}}>about </NavLink>
                        <NavLink to="/login" activeStyle={{color: 'green'}}>Login </NavLink>

                        <u> {props.user.name} </u>
                        <a href="#" onClick={() => {
                            props.logout();
                            cookie.deleteCookie("auth");
                            window.location.pathname = "/login";
                        }}> Logout
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    );
}