const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    name: {
        type: String,
    required: true
},
base: {
    type: String,
    required: true
},
type: {
    type: String,
    required: true,
}
});

module.exports = Mongoose.model('Pokemon')