const mongoose = require("mongoose");
// imagePath: { type: String, required: true },

const lectureSchema = mongoose.Schema({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  status: {type: Boolean, required: true},
  lectureTitle: {type: String, required: true},
  date: {type: String, required: true},
  regLink: {type: String, required: true},
});
// time: {type: String, required: true},

module.exports = mongoose.model("Lecture", lectureSchema);
