const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session')

const config = require('./config');
const userCtrl = require('./controllers/userCtrl')
const profileCtrl = require('./controllers/profileCtrl')

const app = express();

app.use(bodyParser.json());
var corsOptions = {
      origin: 'http://localhost: 3001'
};
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true

}))
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles)

const port = 3001;
app.listen(port, function(){
      console.log(`listening to port ${port}`)
});