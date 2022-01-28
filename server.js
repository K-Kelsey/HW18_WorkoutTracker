const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

var compression = require("compression")

// const html = require(`./routes/htmlRoutes`);
// const api = require(`./routes/apiRoutes`);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(compression());
app.use(logger("dev"));


// Set up connection for mongodb URI  
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// set up routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

// require("./routes/html.js")(app);
// app.use(html, api);

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});
