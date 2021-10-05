let mongoose = require("mongoose");

// create tournament model class
let tournament = mongoose.Schema(
  {
    title: String,
    tournamentDescription: String,
    userCreator: String,
    tourndate: String,
    status: Boolean,
    group1:String,
    group2:String,
    p11: String,
    p12: String,
    p13: String,
    p14: String,
    p15: String,
    p16: String,
    p17: String,
    p18: String,
    p21: String,
    p22: String,
    p23: String,
    p24: String,
    p25: String,
    p26: String,
    p27: String,
    p28: String,
    category: {
      lines: [
        {
          option: {
            name: String,
          },
        },
      ],
      tournamentCount: Number,
      tournamentOrder: Number,
    },
  },
  {
    collection: "tournaments",
  }
);

module.exports = mongoose.model('tournament', tournament);/*/

'use strict'

class Options {
    constructor(name = ""){
        //this._id = _id;
        this.name = name;
    }
}

class Line {
    constructor(option = new Options()){
        this.Options  = option;
    }

    toString() {
        return "{" + this.Options.toString() + "}";
    }
}

class Category {
    constructor(lines = [], tournamentCount = 0, tournamentOrder = 0){
        this.lines = lines;
        this.tournamentCount = tournamentCount;
        this.tournamentOrder = tournamentOrder;
    }

    toString() {
        let outputstring = "";
        let count = 0;

        for( let line of this.lines){
            outputstring += "{" + this.lines.toString();
            count++
            outputstring += (count > this.lines.length) ? "}, \n" : "} \n";
        }
        outputstring += ", tournamentCount: "+ this.tournamentCount + "\n";
        outputstring += ", tournamentOrder: " + this.tournamentOrder;
        return outputstring;
    }

    addLine (line) {
        this.lines.push(line);
        this.tournamentOrder += 1;
    }

    empty() {
        this.lines = [];
        this.tournamentCount = 0;
        this.tournamentOrder = 0;
    }
}

module.exports.Category = Category;
module.exports.Line = Line;
module.exports.Options = Options;*/