let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
let passport = require("passport");

let groupCtrl = require("../controller/group");
//helper function for the guard perpuses
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* Get List -- Read operation */
router.get("/", groupCtrl.displaygroupList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', groupCtrl.displayAddPage);

/* POST route for proccessing the add page  */
router.post('/add', groupCtrl.processgroupAdd);

/* POST request for proccessing the edit page  */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), groupCtrl.processEditPage);

/* Get request - perform delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), groupCtrl.performDelete);

module.exports = router;