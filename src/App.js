import { Component } from "react";
import UserTable from "./components/UserTable";
import SearchBox from "./components/SearchBox";
import SearchAndSort from "./components/SearchSort";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ""
        };
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
            .then((res) => res.json())
            .then((users) => {
                console.log(users)
                this.setState({ users: users.results });
            });
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value});
    };
    lastNameAsc = () => {
        const users = this.state.users.sort((a, b) =>
            a.name.last.localeCompare(b.name.last)
        );
        this.setState({ users: users });
    };
    lastNameDesc = () => {
        const users = this.state.users.sort((a, b) =>
            b.name.last.localeCompare(a.name.last)
        );
        this.setState({ users: users });
    };
    

    render() {
        const { users, searchField } = this.state;
        const filteredUsers = users.filter((user) => 
        user.name.last.toLowerCase().includes(searchField.toLowerCase()));
        return ( 
        <div className = "App">
            <h1> User Directory </h1> 
            <SearchBox handleChange={ this.handleChange} placeholder ="search by last name"/>
            <SearchAndSort lastNameAsc={this.lastNameAsc} lastNameDesc={this.lastNameDesc}/>
            <UserTable user = { filteredUsers }></UserTable>  
        </div>
        );
    }
}

export default App;