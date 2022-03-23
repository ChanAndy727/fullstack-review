const express = require('express');
const helpers = require('../helpers/github.js')
const db = require('../database/index.js')

let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  // res.send(helpers.getReposByUsername(req.body.term));
  helpers.getReposByUsername(req.body.term)
  .then((res) => {
    res.forEach((obj) => {
      db.save(obj);
    })
  })
  .catch((err) => {
    console.log(err);
  })

})
    // console.log('you are hitting the post.', req.body.term);


  // res.end(repos);

  // res.send(arr);


  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


app.get('/repos', function (req, res) {
  console.log('you are hitting get.', req.body);
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send(req.body);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

