import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }
  componentDidMount() {
    axios.get('/repos')
      .then((data)=>{
        console.log(data);
        this.setState({
          repos: data.data
        })
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {term: term}) //does this return a promise?

     //do we pass repos as param {repo: this.state.repos}
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));