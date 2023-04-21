const express = require('express')
const app = express()

//requireing router
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.json())

const {
    fetch,
} = require('../controller/request')


router.route('/getdata').post(fetch)
// router.route('/login').post(login)
// router.route('/create_room').get(createroom)
// router.route('/join_room').post(join_room)


module.exports = router;