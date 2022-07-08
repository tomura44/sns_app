/*ユーザー情報*/
const router = require("express").Router();


//ユーザー登録




router.get("/", (req, res) => {
    res.send("user router");
})

module.exports = router;