let mongoose = require("mongoose");

// create group model class
let group = mongoose.Schema(
  {
    title: String,
    groupType: Boolean,
    userCreator: String,
    tourndate: String,
    status: Boolean,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    p5: String,
    p6: String,
    p7: String,
    p8: String,
    category: {
      lines: [
        {
          option: {
            name: String,
          },
        },
      ],
      groupCount: Number,
      groupOrder: Number,
    },
  },
  {
    collection: "groups",
  }
);

module.exports = mongoose.model('group', group);