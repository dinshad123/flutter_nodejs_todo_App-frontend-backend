require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.routes");
const ToDoRoute = require('./routes/todo.router');
const app = express();
const cors = require('cors'); // Import the cors middleware

const port = process.env.PORT || 3000;

// Middleware for CORS - configure it before defining routes
app.use(cors({
  origin: 'http://frontenddomain.com', // Replace with your actual frontend domain
}));

app.use(bodyParser.json());

app.use("/", UserRoute);
app.use("/", ToDoRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
