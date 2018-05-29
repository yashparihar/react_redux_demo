import React from "react";
import Userlist from './userlist.js';

import Async from 'react-promise'
//import from "./../../asset/randomData.json";
import { CookieMap } from './../utility/cookieLib.js'

var cookie = new CookieMap();
let token = cookie.getCookie('authToken');

let dummyData = './../asset/randomData.json';

/*
//function getList(){
let getList = new Promise((resolve, reject) => {

  //}
  let rows = [];


  fetch('http://192.168.3.121:7000/manage/list/getUserList', {
    headers: {
      'content-type': 'application/json',
      'authorization': token
    }
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (res) {
      console.log(res)
      let record = res.data;
      let result = new Array(record)[0];
      //   console.log(result);

      
            for (var i = 0; i < 5; i++) {
              //console.log(result[i]);
              //console.log(result[i]['_id']);
      
              rows.push(
                <tr>
                <td className='text-white'>
                  <a href="javascript:;">
                    id:
                    {result[i]['_id']}
                  </a>
                </td>
                <td>
                  email:
                  {result[i]['email']}
                </td>
                <td>
                  role:
                  {result[i]['role']}
                </td>
                <td>
                  type:
                  {result[i]['loginType']}
                </td>
              </tr> )
            } 
            

      resolve(result);
    })
    .catch(function (error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
      reject(new Error('Network response was not ok.'));
    });
  //console.log(rows);
  // return rows;
});
*/

/*
function *gen(){
  //api call geting userlist
  var ele= [];
  getList.then(function(res){
    console.log("this:-"); 
    console.log(res);
    ele = res;
  })
  console.log(ele);
  yield "done";
  return ele;
  //return user list in array
} */


export class User extends React.Component {

  constructor() {
    super();
    this.state = {
      recordList: "as usual"
    };
  }

  Demoo() {
    return (
      <div> this printed </div>
    )
  }

  componentDidMount() {
    this.setState({
      recordList: "changed 2"
    });

    console.log("comp did mount, val:" + this.state.recordList);

    /*
        fetch('http://192.168.3.121:7000/manage/list/getUserList', {
          headers: {
            'content-type': 'application/json',
            'authorization': token
          }
        })
          .then(function (response) {
            return response.json()
          })
          .then(function (res) {
            console.log(res)
            let record = res.data;
            let result = new Array(record)[0];
    
            this.setState({
              recordList: result
            });
          });
    */
  }


  render() {
    // let ele = gen();
    //let lst = ele.next();
    // console.log(ele);
    console.log("state val:" + this.state.recordList)

    return (

      <div> jjj
           {console.log("when does it print")}
      </div>


      // <div> user list
      //   {  res.map(rec => { 
      //     <ul>
      //       <li> {rec['_id']} </li>
      //       <li> {rec['email']} </li>
      //     </ul>
      //   } ) }
      //   </div>      

    )

  }
}


export default User;
