const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});






// const express = require("express");
// const mongoose = require("mongoose");
// const logger = require("morgan");

// var compression = require("compression")

// // const html = require(`./routes/htmlRoutes`);
// // const api = require(`./routes/apiRoutes`);

// const PORT = process.env.PORT || 3000;
// const app = express();
// const db = require("./models");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));

// app.use(compression());
// app.use(logger("dev"));


// // Set up connection for mongodb URI  
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });

// // set up routes
// app.use(require("./routes/apiRoutes.js"));
// app.use(require("./routes/htmlRoutes.js"));

// // require("./routes/html.js")(app);
// // app.use(html, api);

// app.listen(PORT, () => {
//     console.log(`App running on localhost:${PORT}`);
// });
