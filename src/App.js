import {Component}from "react";
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      users:[], 
      searchField:" "
    }}
    componentDidMount(){
      fetch("https://randomuser.me/api/?results=20")
      .then(res => res.json())
      .then(users => {
        console.log(users)
        this.setState({users: users.results})
      })
    }
    render(){
    return ( <div className = "App" >
        <h1> User Directory </h1>   
        </div>
    );
    }
}

export default App;
