const router = require("express").Router();
const User = require("../models/User");

// router.get("/", (req, res) => {
//     res.send("auth router");
// })

router.post("/register", async (req, res) => {
    try{
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        return req.status(200).json(user);
    } catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;