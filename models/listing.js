const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-large-cave-with-a-body-of-water-inside-of-it-ZOYkQAsJ0so",
        set: (v) => v === "" 
        ? "https://unsplash.com/photos/a-large-cave-with-a-body-of-water-inside-of-it-ZOYkQAsJ0so" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema );
module.exports = Listing;