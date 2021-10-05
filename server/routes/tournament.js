let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
let passport = require("passport");

let tournamentCtrl = require("../controller/tournament");
//helper function for the guard perpuses
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* Get List -- Read operation */
router.get("/", tournamentCtrl.displaytournamentList);

/* GET Route for display the Add page - CREATE Operation */
router.get('/add', tournamentCtrl.displayAddPage);

/* POST route for proccessing the add page  */
router.post('/add', tournamentCtrl.processtournamentAdd);

/* Get request - perform delete action */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), tournamentCtrl.performDelete);

module.exports = router;