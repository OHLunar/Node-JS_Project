import express from 'express';
const router = express.Router();
import User from '../models/user.js';

router.get('/signup', (req, res) => {
    User.findAll()
        .then(Users => {
            res.render('createUser', {
                Users: Users
            });
        })
        .catch(error => {
            console.log(error.message);
        });
});

router.get('/viewUsers', (req, res) => {
    User.findAll()
        .then(Users => {
            res.render('viewUsers', {
                Users: Users
            });
        })
        .catch(error => {
            console.log(error.message);
        });
});


router.get('/deleteUser/:id', async(req,res) =>{
    const userId = req.params.id;
    User.findByPk(userId)
    .then(user => {
        user.destroy()
        .then(user_deleted => {
            res.redirect('/accounts/viewUsers');
        })
    })
    .catch(error => {
        console.log(error.message);
    })
})

router.post('/createNewAccount', (req,res) => {
    //Get the user data
    const {firstName,lastName,email,phone} = req.body;

    //Check if user exist
    User.findAll({where: {email:email}})
    .then(async account => {
        if(account.length != 0){
            console.log("Email is not available");
            res.redirect('/accounts/signup');
        } else {
            //Create the account
            User.create({
                email: email,
                phoneNumber: phone,
                firstName: firstName,
                lastName: lastName,
            })
            .then(account_created => {
                console.log(account_created);
                res.redirect('/accounts/signup');
            })
            .catch(error => {
                console.log(error.message);
            })
        }
    })
    .catch(error => {
        console.log(error.message);
    })
})

router.get('/homePage', (req,res) => {
    res.render('homePage')
})

router.get('/viewUsers', (req,res) => {
    res.render('viewUsers')
})

export default router;  