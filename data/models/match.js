const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const numOfPlayresValidator = (players) => {
      return players.length == 2
}

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    championshipsWon: {
        type: Number
    }
})

const MatchSchema = new Schema({
    year: {
        type: Number,
        required: true,
        min: 1886,
        max: new Date().getFullYear()
    },
    duration: {
        type: Number,
        required: true,
    },
    players: {
        type: [PlayerSchema],
        validate: [numOfPlayresValidator, 'number of players must be 2']
    }

})

module.exports = mongoose.model('Match', MatchSchema, 'matches');
