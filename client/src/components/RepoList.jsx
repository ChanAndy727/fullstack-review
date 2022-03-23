import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
      {props.repos.map(repo => (
        <Repo
          repo={repo}
          key={repo.id}
        />
      ))}
    </ul>
  </div>
)

export default RepoList;