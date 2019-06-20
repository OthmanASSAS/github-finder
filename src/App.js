import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import axios from 'axios';


class App extends Component {

  state = {
    users: [],
    loading: false,
    alert:null
  }


  /*  async componentDidMount() {
     this.setState({ loading: true })
 
     const res = await axios.get(
       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
     );
 
     this.setState({ users: res.data, loading: false });
 
   } */

  // Search Github users
  searchUsers = async text => {


    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });

  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

// Set Alert
setAlert = (msg, type) => {

this.setState({alert:{msg, type}});

}

clearAlert=()=> this.setState({alert:null})


  render() {
    const { users, loading, alert } = this.state;
    return (
      <div className="App">

        <Navbar />
        <div className="container">
          <Alert alert={alert}/>
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={users.length > 0} 
          setAlert={this.setAlert}
          clearAlert={this.clearAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
