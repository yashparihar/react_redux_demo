//THIS IS WHERE SETTING OF ROUTING , STORE , RENDER TO APP
import React from "react";
import {render} from "react-dom";

//IMPORTING REACT ROUTER DEPENDENCY
// import {BrowserRouter as Router, Link , NavLink , Redirect , Prompt} from 'react-router-dom' ;
// import Route from 'react-router-dom/Route';

//REDUX DEPENDENCY
import store  from './store.js';
import {Provider} from 'react-redux';

//CONTAINERS: APP
import App from './containers/Appcontainer.js';

store.subscribe(() => {
    console.log(store.getState());
});

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('app') );






