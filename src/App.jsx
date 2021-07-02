import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Settings from "./Setting";
import Hero from "./Hero";
import Match from "./Match";

class App extends Component{

    componentDidMount(){
        if(window.location.pathname==="/"){
            window.history.pushState("", "", "/settings");
            window.location.reload();
        }
    }
    render(){
        return (<Router>
                <Route path="/settings" component={Settings}/>
                <Route path="/hero" component={Hero}/>
                <Route path="/match" component={Match}/>
            </Router>);
    }

}
export default App;
