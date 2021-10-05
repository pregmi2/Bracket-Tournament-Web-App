let express = require("express");
let router = express.Router();

let group = require("../models/group");
let tournament = require("../models/tournament");
let Category = tournament.Category;
let Options = tournament.Options;

module.exports.displaygroupList = (req, res, next) => {
  group.find((err, groupList) => {
    if (err) {
      return console.error(err);
    } else {
      return res.json(groupList);
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.json({ success: true, msg: "Successfully display add page" });
};

module.exports.processgroupAdd = (req, res, next) => {
  //Serialize the data
  let category = new Category();
  var option = new Options(req.body.p1);
  category.lines.push({ option });
  var option = new Options(req.body.p2);
  category.lines.push({ option });
  var option = new Options(req.body.p3);
  category.lines.push({ option });
  var option = new Options(req.body.p4);
  category.lines.push({ option });
  var option = new Options(req.body.p5);
  category.lines.push({ option });
  var option = new Options(req.body.p6);
  category.lines.push({ option });
  var option = new Options(req.body.p7);
  category.lines.push({ option });
  var option = new Options(req.body.p8);
  category.lines.push({ option });
  
  category.groupCount = 8;
  category.groupOrder = 1;
  
  //Create a new group tournament
  let newgroup = group({
    title: req.body.title,
    groupType: req.body.groupType,
    userCreator: req.body.userCreator,
    tourndate: req.body.tourndate,
    status: req.body.status,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    p4: req.body.p4,
    p5: req.body.p5,
    p6: req.body.p6,
    p7: req.body.p7,
    p8: req.body.p8,
    category: category,
  });
  // category: category,

  //Add new order object to the database
  group.create(newgroup, (err, group) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Added a New group!" + group,
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let category = new Category();
  var option = new Options(req.body.p1);
  category.lines.push({ option });
  var option = new Options(req.body.p2);
  category.lines.push({ option });
  var option = new Options(req.body.p3);
  category.lines.push({ option });
  var option = new Options(req.body.p4);
  category.lines.push({ option });
  var option = new Options(req.body.p5);
  category.lines.push({ option });
  var option = new Options(req.body.p6);
  category.lines.push({ option });
  var option = new Options(req.body.p7);
  category.lines.push({ option });
  var option = new Options(req.body.p8);
  category.lines.push({ option });
  
  category.groupCount = 8;
  category.groupOrder = 1;

  //Create a group tournament
  let updategroup = group({
    _id: id,
    title: req.body.title,
    groupType: req.body.groupType,
    userCreator: req.body.userCreator,
    tourndate: req.body.tourndate,
    status: req.body.status,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    p4: req.body.p4,
    p5: req.body.p5,
    p6: req.body.p6,
    p7: req.body.p7,
    p8: req.body.p8,
    category: category,
  });

  //update order object to the database
  group.updateOne({ _id: id }, updategroup, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfull!",
        group: updategroup,
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  group.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfull!" });
    }
  });
};
