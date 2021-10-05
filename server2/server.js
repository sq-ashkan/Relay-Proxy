const bodyParser = require('body-parser'); // for parsing of req.body we need this package
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

//Express configuration
const express = require('express'); // flexible Node.js web application framework that provides a robust set of features to develop web app.
const app = express(); 
app.use(bodyParser.json({ limit: "50mb" })); // middleware for parsing bodies 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server 2 is ready');
})


//Webservice for checking Token, You can of course generate a token and set that on DB and then check this token with data from DB
app.post('/tokenchecker', (req, res) => {
    if(req.body.token == '8844a1b7422514738e05ddd'){
        res.status(200).send('token is valid')
    } else {
        res.status(400).send('token not valid')
    }
    
})

app.listen(3001, () => {
    console.log(`app is running on port 3001`);
})