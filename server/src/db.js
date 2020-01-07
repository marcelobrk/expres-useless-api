const monk = require('monk');
const db = monk('mongodb://omnistack:mysenha@omnistack-shard-00-00-yfh4q.mongodb.net:27017,omnistack-shard-00-01-yfh4q.mongodb.net:27017,omnistack-shard-00-02-yfh4q.mongodb.net:27017/test?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority');

module.exports = db;