// Import the mongoose module
const mongoose = require("mongoose")

// Bring in config variables
const config = require("../config/index")

// Set up default mongoose connection
const dbURL = `mongodb+srv://${config.DB_USER}:${config.DB_PASS}@cluster0.jtb7g.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`

mongoose.set('useCreateIndex', true);

// Connect
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Store the connection in a variable
const db = mongoose.connection

// Check connection error
db.on("error", err => {
    console.error(console, err)
})

// Connection successful
db.once("open", () => {
    // console.log("Connected to DB")
})

module.exports = db