const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://admin:admin@PaystackAPI-shard-00-00-lamvp.mongodb.net:27017,PaystackAPI-shard-00-01-lamvp.mongodb.net:27017,PaystackAPI-shard-00-02-lamvp.mongodb.net:27017/PaystackAPI?ssl=true&replicaSet=PaystackAPI-shard-0&authSource=admin&retryWrites=true",
    {
      useNewUrlParser: true,useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// update string url terbaru
// mongodb://joo:jooprima@crudmovie-shard-00-00-w5jw0.mongodb.net:27017,crudmovie-shard-00-01-w5jw0.mongodb.net:27017,crudmovie-shard-00-02-w5jw0.mongodb.net:27017/crudmovie?ssl=true&replicaSet=crudmovie-shard-0&authSource=admin&retryWrites=true
// mongodb://admin:admin@paystackapi-shard-00-00-lamvp.mongodb.net:27017,paystackapi-shard-00-01-lamvp.mongodb.net:27017,paystackapi-shard-00-02-lamvp.mongodb.net:27017/paystackapi?ssl=true&replicaSet=paystackapi-shard-0&authSource=admin&retryWrites=true

// mongoose
//   .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

module.exports = { mongoose };
