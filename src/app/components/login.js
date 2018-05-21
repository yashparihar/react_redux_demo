import React from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom' ;
import {CookieMap} from './../utility/cookieLib.js';

const cookie = new CookieMap();

// DONT WORK
const goHome = () => {
    <Redirect to="/home"/>
}

export class Login extends React.Component {

    validateField() {

        return new Promise((resolve, reject) => {
            var u = document.getElementById("username").value;
            var p = document.getElementById("password").value;
            console.log("U:" + u);
            if (u == null && p == null) return false;
            // console.log("before login, its status: " + this.props.loginStatus);//.then((state)=>{console.log(state)}));
            try {
                resolve(this.props.loginCheck(u, p));
            }
            catch (err) {
                console.log(err);
                reject(err);
            }
        });
    }


    render() {
        return (
            <div>
                <p> PLease login first</p>

                <input type="text" id="username" name="username" placeholder="username"/>
                <input type="password" name="password" id="password"/>

                <button onClick={() => {
                    this.validateField().then((res) => {
                        console.log("yeh login success: " + this.props.loginStatus);
                        console.log("login status response: " + res);
                        if (this.props.loginStatus) {
                            console.log("Redirect to home now");
                            cookie.setCookie("auth","yash", 365);
                            window.location.pathname= "/home";
                            //DONT WORK AS OF NOW
                                //this.props.history.push('/home', { some: 'state' })

                        }
                    })
                        .catch((err) => {
                            console.log("err is " + err);
                        })


                    //  window.location.pathname="/";
                    /*else {[
                       console.log("logic Failed");
                       alert("Invalid credentials .. try again");
                   }*/
                }}>Login
                </button>
            </div>
        )
    };
}

