const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

var exphbs  = require('express-handlebars');
const app = express();

app.engine(
  'hbs',
  exphbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

const addnameRoutes = require('./routes/add-name');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addnameRoutes.routes);
app.use(usersRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});


app.listen(3000);
