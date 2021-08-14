const router = require("express").Router();
const { User } = require("../models/userModel");

router.route("users/").get((req, res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json("error:"+err));
});

router.route("users/add").post((req, res)=>{
    const username = req.body.username;
    const NewUser = new User({username});

    NewUser.save()
    .then (()=>res.json('added successfully'))
    .carch(()=>res.status(400).json("error:"+err));
});
module.exports = router;

