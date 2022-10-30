const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


// const express = require("express");
// const routes = require("./routes")
// const apiRoutes = require("./routes/api")
// const htmlRoutes = require("./routes/htmlRoutes")

// const app = express();
// // creating environment variable port
// const PORT =  process.env.PORT || 3001;
// // asks express to create a route for every file in the 'public' folder and give it a '/' route
// app.use(express.static('public'));

// //middlewares
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// //routes
// app.listen(PORT, () => console.log(`Listening on ${PORT}`))