const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//conectando la base de datos
mongoose.connect('mongodb://localhost/pagina_utf',{useNewUrlParser: true})
.then(db => console.log("db conectada")).catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');
//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//midlewares
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
//routes
app.use('/',indexRoutes);
//starting the server
app.listen(app.get('port'),function(){
  console.log(`listen on port ${app.get('port')}`);
});
