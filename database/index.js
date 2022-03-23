const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  user: String,
  url: String,
  forks: Number
});


let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var currRepo = new Repo({
    id: repo.id,
    user: repo.owner.login,
    url: repo.url,
    forks: repo.forks_count
  })
  currRepo.save();
}

let topRepos = (cb) => {
  Repo.find().sort('-forks').limit(25).exec((err,data)=>{
    if (err){
      cb(err,null);
    } else {
      cb(null, data);
    }
  })
}

module.exports = {
  save,
  topRepos
}
// module.exports.save = save;