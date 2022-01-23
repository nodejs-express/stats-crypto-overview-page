const port = process.env.PORT || 1000;
const env  = process.env.NODE_ENV;
const config = require('config');
const compression = require('compression')
const http = require('http');
const path = require('path');
const i18n = require('i18n');
const helmet = require('helmet');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const expressSession = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(expressSession);
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser');
const useragent    = require('express-useragent');
const ejs          = require('ejs');
const express      = require('express');
const app          = express();
const server       = http.createServer(app);

i18n.configure({
  locales: ['en','de','fr','es','it','pt','ru','tr','fin','bel','dnk','gr','hun','nl','swe'],
  defaultLocale: 'en',
  cookie: 'coinforecast.org',
  queryParameter: 'lang',
  header: 'accept-language',
  updateFiles: false,
  syncFiles: false,
  register: global,
  objectNotation:true,
  directory: path.join(__dirname, '/resources/locales')
});

app.set('view engine','ejs');
app.enable('trust proxy');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/',express.static('public'));
app.use('/en',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(helmet());
app.use(cookieParser())
app.use(i18n.init);
app.use(useragent.express());
app.use(flash());
app.use('/api',require('./routes/api'));
app.use('/',require('./routes/web'));


server.listen(port,()=>{
  console.log(`Server listen on Port:${port}...`);
});
     

