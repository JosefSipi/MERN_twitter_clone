const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');



mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));





app.get("/", (req, res) => {
    // const user = new User({
    //     handle: "josef",
    //     email: "josef@yahoo.com",
    //     password: "123456"
    // });
    // user.save()
    res.send("Hello World");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));