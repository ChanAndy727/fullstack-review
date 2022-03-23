const mongoose = require('mongoose');
require('mongoose-type-url');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  user: String,
  url: mongoose.SchemaTypes.Url,
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
  // currRepo.save();
  Repo.findByIdAndUpdate(repo.id, currRepo, { upsert: true });
  // Repo.findOneAndUpdate(
  //   {id: currRepo.id}, currRepo, {upsert: true}, (err,res) => {
  //     if (err) {
  //       return res.send(500, {err: err})
  //     }
  //     return res.send('success!')
  //   })

}
module.exports.save = save;
// module.exports.save = save;