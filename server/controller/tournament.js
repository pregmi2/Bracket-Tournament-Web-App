let express = require("express");
let router = express.Router();

//let tournament = require("../models/tournament");
let tournament = require("../models/tournament");
let Category = tournament.Category;
let Options = tournament.Options;

module.exports.displaytournamentList = (req, res, next) => {
    tournament.find((err, tournamentList) => {
      if (err) {
        return console.error(err);
      } else {
        return res.json(tournamentList);
      }
    });
  };
  module.exports.displayAddPage = (req, res, next) => {
    res.json({ success: true, msg: "Successfully display add page" });
  };

  module.exports.processtournamentAdd = (req, res, next) => {
    //Serialize the cart data
    let category = new Category();
    var option = new Options(req.body.tournament1);
    category.lines.push({ option });
    var option = new Options(req.body.tournament2);
    category.lines.push({ option });
    var option = new Options(req.body.p11);
    category.lines.push({ option });
    var option = new Options(req.body.p12);
    category.lines.push({ option });
    var option = new Options(req.body.p13);
    category.lines.push({ option });
    var option = new Options(req.body.p14);
    category.lines.push({ option });
    var option = new Options(req.body.p15);
    category.lines.push({ option });
    var option = new Options(req.body.p16);
    category.lines.push({ option });
    var option = new Options(req.body.p17);
    category.lines.push({ option });
    var option = new Options(req.body.p18);    
    category.lines.push({ option });
    var option = new Options(req.body.p21);
    category.lines.push({ option });
    var option = new Options(req.body.p22);
    category.lines.push({ option });
    var option = new Options(req.body.p23);
    category.lines.push({ option });
    var option = new Options(req.body.p24);
    category.lines.push({ option });
    var option = new Options(req.body.p25);
    category.lines.push({ option });
    var option = new Options(req.body.p26);
    category.lines.push({ option });
    var option = new Options(req.body.p27);
    category.lines.push({ option });
    var option = new Options(req.body.p28);
    category.lines.push({ option });
    category.tournamentCount = 16;
    category.tournamentOrder = 1;
    
    //Create a new tournament tournament
    let newtournament = tournament({
      title: req.body.title,
      tournamentDescription: req.body.tournamentDescription,
      userCreator: req.body.userCreator,
      tourndate: req.body.tourndate,
      status: req.body.status,
      tournament1: req.body.tournament1,
      tournament2: req.body.tournament2,
      p11: req.body.p11,
      p12: req.body.p12,
      p13: req.body.p13,
      p14: req.body.p14,
      p15: req.body.p15,
      p16: req.body.p16,
      p17: req.body.p17,
      p18: req.body.p18,
      p21: req.body.p21,
      p22: req.body.p22,
      p23: req.body.p23,
      p24: req.body.p24,
      p25: req.body.p25,
      p26: req.body.p26,
      p27: req.body.p27,
      p28: req.body.p28,
      category: category,
    });
    // category: category,

    //Add new order object to the database
    tournament.create(newtournament, (err, tournament) => {
        if (err) {
        console.log(err);
        res.end(err);
        } else {
        res.json({
            success: true,
            msg: "Successfully Added a New Tournament!" + tournament,
        });
        }
    });
};
/* perform tournament delete  */
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    tournament.deleteOne({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.json({ success: true, msg: "Successfully Deleted Tournament!" });
      }
    });
  };