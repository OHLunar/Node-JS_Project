import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import database from './models/database.js';


//IMPORT ROUTES
import accountsRoute from './controller/accounts.js';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','views');

// Serve static files from the "public" directory
app.use(express.static('public'));

//ROUTES

//http://localhost:3001/accounts/homePage
//http://localhost:3001/accounts/signup
//http://localhost:3001/accounts/viewUsers

app.use('/accounts', accountsRoute);


database
.sync()
.then(results => {
    console.log(results);
    app.listen(process.env.PORT, () => {
        console.log(`Server is running via port ${process.env.PORT}`);
    })
})
.catch(error => {
    console.log(error.message);
})
