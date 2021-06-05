const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const db= require('./models');
const port=process.env.PORT || 3000;

const apiRoutes=require('./routes/apiRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRoutes);



 db.sequelize.sync().then(()=>{
     app.listen(port,()=>{
         console.log("listening on port " + port);
     });
 })