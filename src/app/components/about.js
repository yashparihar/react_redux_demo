import React from "react";

export class About extends React.Component {

    constructor() {
        super();
        this.updateMsg = this.updateMsg.bind(this);
        this.submitMsg = this.submitMsg.bind(this);
        
        this.state = {
            message: ''
        }
    }

    updateMsg(event) {
        this.setState({
            message: event.target.value
        });

    }

    submitMsg(event){
        console.log(this.state.message);

        const nextMsg = {
            id: this.state.message.length,
            text: this.state.message 
        }

        firebase.database().ref('messages/'+nextMsg.id).set(nextMsg)

        // var list= Object.assign([] , this.state.message);
        // console.log(list , typeof(list));
        // list.push(nextMsg);
        // this.setState({
        //     message : list
        // })

        console.log(this.state.message);
    }

    componentDidMount() {
        console.log("about page did mount");
        firebase.database().ref('messages/').on('value', (snapshot) => {
            let ll = snapshot.val();

            console.log(ll);
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="msg" id="msg" onChange={this.updateMsg} />
                <button onClick={this.submitMsg}>Send</button>
            </div>
        )
    };
}