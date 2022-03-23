import React from 'react';
class Repo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <li>
        {this.props.repo.url}
      </li>
    )
  }
}
export default Repo;