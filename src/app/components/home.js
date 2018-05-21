import React from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';

import Userlist from './userlist.js';

const headerColor = () => {
    return (
        <div>
            Color change of header part
        </div>
    );
}

const FooterColor = () => {
    return (
        <div>
            Color change of Footer part
        </div>
    );
}

const colorDom = ({ match }) => (
    <div>
        Color changing dom

        <Route path={"home/changeHeader"}  render={() => (
            <div> Color changing of header </div>
        )}/>
        <Route path={"home/userlist"} component={Userlist}/>

    </div>
)


export class Home extends React.Component {
    render() {
        return (
            <div>
                <p> Home page </p>

                <NavLink to="home/changeHeader" activeStyle={{color: 'green'}}>Change Header Style</NavLink>
                <NavLink to="home/userlist" activeStyle={{color: 'green'}}>Change Footer style</NavLink>

                {/*<Redirect to="/home/changeHeader"/>*/}
                <Route path="/home" component={colorDom}/>
                {/*<Route path="/home" component={FooterColor}/>*/}

            </div>
        )
    };
}


// export const Home = (props) => {
//     return (
//         <div>
//             <p> this is Home page </p>
//         </div>
//     )
// }