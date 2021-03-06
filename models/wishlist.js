const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  url: {type: String, required: true}
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
